/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Directionality} from '@angular/cdk/bidi';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {ESCAPE, UP_ARROW} from '@angular/cdk/keycodes';
import {
    FlexibleConnectedPositionStrategy,
    Overlay,
    OverlayConfig,
    OverlayRef,
    PositionStrategy,
    ScrollStrategy,
} from '@angular/cdk/overlay';
import {ComponentPortal, ComponentType} from '@angular/cdk/portal';
import {DOCUMENT} from '@angular/common';
import {filter, take} from 'rxjs/operators';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ComponentRef,
    ElementRef,
    EventEmitter,
    Inject,
    inject,
    InjectionToken,
    Input,
    NgZone,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import {CanColor, mixinColor, ThemePalette} from '@angular/material/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {merge, Subject, Subscription} from 'rxjs';
import {SatCalendar} from './calendar';
import {RangeCalendar} from './range-calendar';
import {matDatepickerAnimations} from './datepicker-animations';
import {createMissingDateImplError} from './datepicker-errors';
import {matRangeDatepickerInput, matRangeDatepickerRangeValue} from './datepicker-input';
import {DateAdapter} from '../datetime/date-adapter';

/** Used to generate a unique ID for each datepicker instance. */
let datepickerUid = 0;

/** Injection token that determines the scroll handling while the calendar is open. */
export const MAT_DATEPICKER_SCROLL_STRATEGY =
    new InjectionToken<() => ScrollStrategy>('mat-range-datepicker-scroll-strategy', {
      providedIn: 'root',
      factory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY,
    });

/** @docs-private */
export function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(): () => ScrollStrategy {
  const overlay = inject(Overlay);
  return () => overlay.scrollStrategies.reposition();
}

// Boilerplate for applying mixins to matRangeDatepickerContent.
/** @docs-private */
export class matRangeDatepickerContentBase {
  constructor(public _elementRef: ElementRef) { }
}
export const _matRangeDatepickerContentMixinBase = mixinColor(matRangeDatepickerContentBase);

/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * SatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
@Component({
moduleId: module.id,
  selector: 'mat-range-datepicker-content',
  templateUrl: 'datepicker-content.html',
  styleUrls: ['datepicker-content.scss'],
  host: {
    'class': 'mat-datepicker-content',
    '[@transformPanel]': '"enter"',
    '[class.mat-datepicker-content-touch]': 'datepicker.touchUi',
    '[class.mat-datepicker-content-above]': '_isAbove',
  },
  animations: [
    matDatepickerAnimations.transformPanel,
    matDatepickerAnimations.fadeInCalendar,
  ],
  exportAs: 'matDatepickerContent',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['color'],
})
export class matRangeDatepickerContent<D> extends _matRangeDatepickerContentMixinBase
  implements AfterViewInit, CanColor, OnInit, OnDestroy {

  /** Subscription to changes in the overlay's position. */
  private _positionChange: Subscription|null;

  /** Reference to the internal calendar component. */
  @ViewChild(RangeCalendar) _calendar: RangeCalendar<D>;

  /** Reference to the datepicker that created the overlay. */
  datepicker: matRangeDatepicker<D>;

  /** Whether the datepicker is above or below the input. */
  _isAbove: boolean;

  constructor(
    elementRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef,
    private _ngZone: NgZone) {
    super(elementRef);
  }

  ngOnInit() {
    if (!this.datepicker._popupRef || this._positionChange) {
      return;
    }

    const positionStrategy =
      this.datepicker._popupRef.getConfig().positionStrategy! as FlexibleConnectedPositionStrategy;

    this._positionChange = positionStrategy.positionChanges.subscribe(change => {
      const isAbove = change.connectionPair.overlayY === 'bottom';

      if (isAbove !== this._isAbove) {
        this._ngZone.run(() => {
          this._isAbove = isAbove;
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }

  ngAfterViewInit() {
    // this._calendar.focusActiveCell();
  }

  ngOnDestroy() {
    if (this._positionChange) {
      this._positionChange.unsubscribe();
      this._positionChange = null;
    }
  }
}


// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
@Component({
  moduleId: module.id,
  selector: 'mat-range-datepicker',
  template: '',
  exportAs: 'matDatepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class matRangeDatepicker<D> implements OnDestroy, CanColor {

  /** Whenever datepicker is for selecting range of dates. */
  @Input()
  get rangeMode(): boolean {
    return this._rangeMode;
  }
  set rangeMode(mode: boolean) {
    this._rangeMode = mode;
    if (this.rangeMode) {
      this._validSelected = null;
    } else {
      this._beginDate = this._endDate = null;
    }
  }
  private _rangeMode;

  @Input()
  get typeMode(): 'month' | 'date' {
    return this._typeMode;
  }
  set typeMode(mode: 'month' | 'date') {
    this._typeMode = mode;
  }
  private _typeMode;

  /** Start of dates interval. */
  @Input()
  get beginDate(): D | null { return this._beginDate; }
  set beginDate(value: D | null) {
    this._validSelected = null;
    this._beginDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _beginDate: D | null;

  _initBeginDate: D | null;


  /** End of dates interval. */
  @Input()
  get endDate(): D | null { return this._endDate; }
  set endDate(value: D | null) {
    this._validSelected = null;
    this._endDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _endDate: D | null;

  _initEndDate: D | null;

   /** Start of months interval. */
   @Input()
   get beginMonth(): D | null { return this._beginMonth; }
   set beginMonth(value: D | null) {
     this._validSelected = null;
     this._beginMonth = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
   }
   _beginMonth: D | null;

   /** End of months interval. */
  @Input()
  get endMonth(): D | null { return this._endMonth; }
  set endMonth(value: D | null) {
    this._validSelected = null;
    this._endMonth = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _endMonth: D | null;





    /** An input indicating the type of the custom header component for the calendar, if set. */
  @Input() calendarHeaderComponent: ComponentType<any>;

  /** The date to open the calendar to initially. */
  @Input()
  get startAt(): D | null {
    // If an explicit startAt is set we start there, otherwise we start at whatever the currently
    // selected value is.
    if (this.rangeMode) {
      return this._startAt || (this._datepickerInput && this._datepickerInput.value ?
        (<matRangeDatepickerRangeValue<D>>this._datepickerInput.value).begin : null);
    }
    return this._startAt || (this._datepickerInput ? <D|null>this._datepickerInput.value : null);
  }
  set startAt(value: D | null) {
    this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  private _startAt: D | null;

  /** The view that the calendar should start in. */
  @Input() startView: 'month' | 'year' = 'month';

  /** Color palette to use on the datepicker's calendar. */
  @Input()
  get color(): ThemePalette {
    return this._color ||
        (this._datepickerInput ? this._datepickerInput._getThemePalette() : undefined);
  }
  set color(value: ThemePalette) {
    this._color = value;
  }
  _color: ThemePalette;

  /**
   * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
   * than a popup and elements have more padding to allow for bigger touch targets.
   */
  @Input()
  get touchUi(): boolean { return this._touchUi; }
  set touchUi(value: boolean) {
    this._touchUi = coerceBooleanProperty(value);
  }
  private _touchUi = false;

  /** Whether the datepicker pop-up should be disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled === undefined && this._datepickerInput ?
        this._datepickerInput.disabled : !!this._disabled;
  }
  set disabled(value: boolean) {
    const newValue = coerceBooleanProperty(value);

    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this._disabledChange.next(newValue);
    }
  }
  private _disabled: boolean;

  /**
   * Emits selected year in multiyear view.
   * This doesn't imply a change on the selected date.
   */
  @Output() readonly yearSelected: EventEmitter<D> = new EventEmitter<D>();

  /**
   * Emits selected month in year view.
   * This doesn't imply a change on the selected date.
   */
  @Output() readonly monthSelected: EventEmitter<D> = new EventEmitter<D>();

  /** Classes to be passed to the date picker panel. Supports the same syntax as `ngClass`. */
  @Input() panelClass: string | string[];

  /** Emits when the datepicker has been opened. */
  @Output('opened') openedStream: EventEmitter<void> = new EventEmitter<void>();

  /** Emits when the datepicker has been closed. */
  @Output('closed') closedStream: EventEmitter<void> = new EventEmitter<void>();


  /** Whether the calendar is open. */
  @Input()
  get opened(): boolean { return this._opened; }
  set opened(value: boolean) { value ? this.open() : this.close(); }
  private _opened = false;

  /** The id for the datepicker calendar. */
  id = `mat-range-datepicker-${datepickerUid++}`;

  /** The currently selected date. */
  get _selected(): D | null { return this._validSelected; }
  set _selected(value: D | null) { this._validSelected = value; }
  private _validSelected: D | null = null;

  /** The minimum selectable date. */
  get _minDate(): D | null {
    return this._datepickerInput && this._datepickerInput.min;
  }

  /** The maximum selectable date. */
  get _maxDate(): D | null {
    return this._datepickerInput && this._datepickerInput.max;
  }

  get _dateFilter(): (date: D | null) => boolean {
    return this._datepickerInput && this._datepickerInput._dateFilter;
  }

  /** A reference to the overlay when the calendar is opened as a popup. */
  _popupRef: OverlayRef;

  /** A reference to the dialog when the calendar is opened as a dialog. */
  private _dialogRef: MatDialogRef<matRangeDatepickerContent<D>> | null;

  /** A portal containing the calendar for this datepicker. */
  private _calendarPortal: ComponentPortal<matRangeDatepickerContent<D>>;

  /** Reference to the component instantiated in popup mode. */
  private _popupComponentRef: ComponentRef<matRangeDatepickerContent<D>> | null;

  /** The element that was focused before the datepicker was opened. */
  private _focusedElementBeforeOpen: HTMLElement | null = null;

  /** Subscription to value changes in the associated input element. */
  private _inputSubscription = Subscription.EMPTY;

  /** The input element this datepicker is associated with. */
  _datepickerInput: matRangeDatepickerInput<D>;

  /** Emits when the datepicker is disabled. */
  readonly _disabledChange = new Subject<boolean>();

  /** Emits new selected date when selected date changes. */
  readonly _selectedChanged = new Subject<matRangeDatepickerRangeValue<D>|D>();

  constructor(private _dialog: MatDialog,
              private _overlay: Overlay,
              private _ngZone: NgZone,
              private _viewContainerRef: ViewContainerRef,
              @Inject(MAT_DATEPICKER_SCROLL_STRATEGY) private _scrollStrategy,
              @Optional() private _dateAdapter: DateAdapter<D>,
              @Optional() private _dir: Directionality,
              @Optional() @Inject(DOCUMENT) private _document: any) {
    if (!this._dateAdapter) {
      throw createMissingDateImplError('DateAdapter');
    }
  }

  ngAfterContentInit() {
    this._initBeginDate = this.beginDate;
    this._initEndDate = this.endDate;
  }

  ngOnDestroy() {
    this.close();
    this._inputSubscription.unsubscribe();
    this._disabledChange.complete();

    if (this._popupRef) {
      this._popupRef.dispose();
      this._popupComponentRef = null;
    }
  }

  /** Selects the given date */
  _select(date: D): void {
    const oldValue = this._selected;
    this._selected = date;
    if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
      this._selectedChanged.next(date);
    }
  }


  /** Selects the given date range */
  _selectRange(dates: matRangeDatepickerRangeValue<D>): void {
    if (!this._dateAdapter.sameDate(dates.begin, this.beginDate) ||
      !this._dateAdapter.sameDate(dates.end, this.endDate)) {
      this._selectedChanged.next(dates);
    }
    this._beginDate = dates.begin;
    this._endDate = dates.end;
  }

  /** Selects the given month range */
  _selectMonthRange(dates: matRangeDatepickerRangeValue<D>): void {
    if (!this._dateAdapter.sameDate(dates.begin, this.beginMonth) ||
      !this._dateAdapter.sameDate(dates.end, this.endMonth)) {
      this._selectedChanged.next(dates);
    }
    this._beginMonth = dates.begin;
    this._endMonth = dates.end;
  }



  /** Emits the selected year in multiyear view */
  _selectYear(normalizedYear: D): void {
    this.yearSelected.emit(normalizedYear);
  }

  /** Emits selected month in year view */
  _selectMonth(normalizedMonth: D): void {
    this.monthSelected.emit(normalizedMonth);
  }

  /**
   * Register an input with this datepicker.
   * @param input The datepicker input to register with this datepicker.
   */
  _registerInput(input: matRangeDatepickerInput<D>): void {
    if (this._datepickerInput) {
      throw Error('A matRangeDatepicker can only be associated with a single input.');
    }
    this._datepickerInput = input;
    this._inputSubscription =
        this._datepickerInput._valueChange
          .subscribe((value: matRangeDatepickerRangeValue<D> | D | null) => {
          if (value === null) {
            this.beginDate = this.endDate = this._selected = null;
            return;
          }
          if (this.rangeMode) {
            value = <matRangeDatepickerRangeValue<D>>value;
            if (value.begin && value.end &&
              this._dateAdapter.compareDate(value.begin, value.end) <= 0) {
              this.beginDate = value.begin;
              this.endDate = value.end;
            } else {
              this.beginDate = this.endDate = null;
            }
          } else {
            this._selected = <D>value;
          }
        });
  }

  /** Open the calendar. */
  open(): void {
    this._initBeginDate = this.beginDate;
    this._initEndDate = this.endDate;
    if (this._opened || this.disabled) {
      return;
    }
    if (!this._datepickerInput) {
      throw Error('Attempted to open an matRangeDatepicker with no associated input.');
    }
    if (this._document) {
      this._focusedElementBeforeOpen = this._document.activeElement;
    }

    this.touchUi ? this._openAsDialog() : this._openAsPopup();
    this._opened = true;
    this.openedStream.emit();
  }

  /** Close the calendar. */
  close(options?: any): void {
    if (!this._opened) {
      return;
    }
    if (this._popupRef && this._popupRef.hasAttached()) {
      this._popupRef.detach();
    }
    if (this._dialogRef) {
      this._dialogRef.close();
      this._dialogRef = null;
    }
    if (this._calendarPortal && this._calendarPortal.isAttached) {
      this._calendarPortal.detach();
    }
    // restore if not applied
    if (!options || !options.apply) {
      this.beginDate = this._initBeginDate;
      this.endDate = this._initEndDate;
      this._selectedChanged.next({
        begin: this.beginDate,
        end: this.endDate,
      });
    }

    const completeClose = () => {
      // The `_opened` could've been reset already if
      // we got two events in quick succession.
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
        this._focusedElementBeforeOpen = null;
      }
    };

    if (this._focusedElementBeforeOpen &&
      typeof this._focusedElementBeforeOpen.focus === 'function') {
      // Because IE moves focus asynchronously, we can't count on it being restored before we've
      // marked the datepicker as closed. If the event fires out of sequence and the element that
      // we're refocusing opens the datepicker on focus, the user could be stuck with not being
      // able to close the calendar at all. We work around it by making the logic, that marks
      // the datepicker as closed, async as well.
      this._focusedElementBeforeOpen.focus();
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }

  /** Open the calendar as a dialog. */
  private _openAsDialog(): void {
    this._dialogRef = this._dialog.open<matRangeDatepickerContent<D>>(matRangeDatepickerContent, {
      direction: this._getDirection(),
      viewContainerRef: this._viewContainerRef,
      panelClass: 'mat-datepicker-dialog',
    });

    this._dialogRef.afterClosed().subscribe(() => this.close());
    this._dialogRef.componentInstance.datepicker = this;
    this._setColor();
  }

  /** Open the calendar as a popup. */
  private _openAsPopup(): void {
    if (!this._calendarPortal) {
      this._calendarPortal = new ComponentPortal<matRangeDatepickerContent<D>>(matRangeDatepickerContent,
                                                                          this._viewContainerRef);
    }

    if (!this._popupRef) {
      this._createPopup();
    }

    if (!this._popupRef.hasAttached()) {
      this._popupRef.setDirection(this._getDirection());
      this._popupComponentRef = this._popupRef.attach(this._calendarPortal);
      this._popupComponentRef.instance.datepicker = this;
      this._setColor();

      // Update the position once the calendar has rendered.
      this._ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        this._popupRef.updatePosition();
      });
    }
  }

  /** Create the popup. */
  private _createPopup(): void {
    const overlayConfig = new OverlayConfig({
      positionStrategy: this._createPopupPositionStrategy(),
      hasBackdrop: true,
      backdropClass: 'mat-overlay-transparent-backdrop',
      direction: this._getDirection(),
      scrollStrategy: this._scrollStrategy(),
      panelClass: 'mat-datepicker-popup',
    });

    this._popupRef = this._overlay.create(overlayConfig);

    merge(
      this._popupRef.backdropClick(),
      // this._popupRef.detachments(),
      this._popupRef.keydownEvents().pipe(filter(event => {
        // Closing on alt + up is only valid when there's an input associated with the datepicker.
        return event.keyCode === ESCAPE ||
               (this._datepickerInput && event.altKey && event.keyCode === UP_ARROW);
      }))
    ).subscribe(() => this.close());
  }

  /** Create the popup PositionStrategy. */
  private _createPopupPositionStrategy(): PositionStrategy {
    return this._overlay.position()
      .flexibleConnectedTo(this._datepickerInput.getPopupConnectionElementRef())
      .withFlexibleDimensions(false)
      .withViewportMargin(8)
      .withPush(false)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top'
        },
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'bottom'
        }
      ]);
  }

  /**
   * @param obj The object to check.
   * @returns The given object if it is both a date instance and valid, otherwise null.
   */
  private _getValidDateOrNull(obj: any): D | null {
    return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
  }

  /** Passes the current theme color along to the calendar overlay. */
  private _setColor(): void {
    const color = this.color;
    if (this._popupComponentRef) {
      this._popupComponentRef.instance.color = color;
    }
    if (this._dialogRef) {
      this._dialogRef.componentInstance.color = color;
    }
  }

  /** Returns the layout direction of the datepicker. */
  private _getDirection() {
    return this._dir ? this._dir.value : 'ltr';
  }
}
