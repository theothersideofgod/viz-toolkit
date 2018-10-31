/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
    DOWN_ARROW,
    END,
    ENTER,
    HOME,
    LEFT_ARROW,
    PAGE_DOWN,
    PAGE_UP,
    RIGHT_ARROW,
    UP_ARROW,
} from '@angular/cdk/keycodes';
import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Inject,
    Input,
    Optional,
    Output,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {Directionality} from '@angular/cdk/bidi';
import {SatCalendarBody, SatCalendarCell} from './calendar-body';
import {createMissingDateImplError} from './datepicker-errors';
import {DateAdapter} from '../datetime/date-adapter';
import {MAT_DATE_FORMATS, MatDateFormats} from '../datetime/date-formats';

/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */
@Component({
  moduleId: module.id,
  selector: 'sat-year-view',
  templateUrl: 'year-view.html',
  exportAs: 'matYearView',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SatYearView<D> implements AfterContentInit {
  /** The date to display in this year view (everything other than the year is ignored). */
  @Input()
  get activeDate(): D { return this._activeDate; }
  set activeDate(value: D) {
    const oldActiveDate = this._activeDate;
    const validDate =
        this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
      this._init();
    }
  }
  private _activeDate: D;

  /** The currently selected date. */
  @Input()
  get selected(): D | null { return this._selected; }
  set selected(value: D | null) {
    this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    this._selectedMonth = this._getMonthInCurrentYear(this._selected);
    console.log(this._selectedMonth);
  }
  private _selected: D | null;

  /** The minimum selectable date. */
  @Input()
  get minDate(): D | null { return this._minDate; }
  set minDate(value: D | null) {
    this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  private _minDate: D | null;

  /** The maximum selectable date. */
  @Input()
  get maxDate(): D | null { return this._maxDate; }
  set maxDate(value: D | null) {
    this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  private _maxDate: D | null;

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter: (date: D) => boolean;

  /** Emits when a new month is selected. */
  @Output() readonly selectedChange: EventEmitter<D> = new EventEmitter<D>();

  /** Emits the selected month. This doesn't imply a change on the selected date */
  @Output() readonly monthSelected: EventEmitter<D> = new EventEmitter<D>();

  /** The body of calendar table */
  @ViewChild(SatCalendarBody) _matCalendarBody: SatCalendarBody;

  /** Grid of calendar cells representing the months of the year. */
  _months: SatCalendarCell[][];

  /** The label for this year (e.g. "2017"). */
  _yearLabel: string;

  /** The month in this year that today falls on. Null if today is in a different year. */
  _todayMonth: number | null;

  /** Current start of interval. */
  @Input()
  get beginMonth(): D | null { return this._beginMonth; }
  set beginMonth(value: D | null) {
    this._beginMonth = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    this.updateRangeSpecificValues();
  }
  private _beginMonth: D | null;

  /** Current end of interval. */
  @Input()
  get endMonth(): D | null { return this._endMonth; }
  set endMonth(value: D | null) {
    this._endMonth = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
    this.updateRangeSpecificValues();
  }
  private _endMonth: D | null;



  /** Fist Month of interval */
  _beginMonthNumber: number | null = 0;

  /** Last Month of interval */
  _endMonthNumber: number | null = 11;

  /** Allow selecting range of dates. */
  @Input() rangeMode = false;

  /** Allow selecting range of months */
  @Input() typeMode = 'date';

  /** Whenever full month is inside dates interval. */
  _rangeFull: boolean | null = false;

  /**
   * The month in this year that the selected Date falls on.
   * Null if the selected Date is in a different year.
   */
  _selectedMonth: number | null;

  /** Whenever user already selected start of dates interval. */
  private _beginDateSelected = false;

  /** Whenever user already selected start of Month interval. */
  private _beginMonthSelected = false;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              @Optional() @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
              @Optional() public _dateAdapter: DateAdapter<D>,
              @Optional() private _dir?: Directionality) {
    if (!this._dateAdapter) {
      throw createMissingDateImplError('DateAdapter');
    }
    if (!this._dateFormats) {
      throw createMissingDateImplError('MAT_DATE_FORMATS');
    }

    this._activeDate = this._dateAdapter.today();
  }

  ngAfterContentInit() {
    this._init();
  }

  /** Handles when a new month is selected. */
  _monthSelected(month: number) {
    console.log('wfawefewa');
    if (this.typeMode !== 'month') {

      const normalizedDate =
      this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);

      console.log(normalizedDate);

      this.monthSelected.emit(normalizedDate);

      const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);

      this.selectedChange.emit(this._dateAdapter.createDate(
          this._dateAdapter.getYear(this.activeDate), month,
          Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));

    } else {
      // below logic for month range


      if (this.rangeMode) {

        if (!this._beginDateSelected) { // At first click emit the same start and end of interval
          this._beginDateSelected = true;
          this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1));
        } else {
          this._beginDateSelected = false;
          this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1));
        }
      }
    }






  }

  /** Handles keydown events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeydown(event: KeyboardEvent): void {
    // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
    // disabled ones from being selected. This may not be ideal, we should look into whether
    // navigation should skip over disabled dates, and if so, how to implement that efficiently.

    const isRtl = this._isRtl();

    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate,
            -this._dateAdapter.getMonth(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate,
            11 - this._dateAdapter.getMonth(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate =
            this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
        break;
      case PAGE_DOWN:
        this.activeDate =
            this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case ENTER:
        this._monthSelected(this._dateAdapter.getMonth(this._activeDate));
        break;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }

    this._focusActiveCell();
    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }

  /** Initializes this year view. */
  _init() {
    this.updateRangeSpecificValues();
    this._selectedMonth = this._getMonthInCurrentYear(this.selected);
    this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
    this._yearLabel = this._dateAdapter.getYearName(this.activeDate);

    const monthNames = this._dateAdapter.getMonthNames('short');
    // First row of months only contains 5 elements so we can fit the year label on the same row.
    this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(row => row.map(
        month => this._createCellForMonth(month, monthNames[month])));
    this._changeDetectorRef.markForCheck();
  }

  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }

  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  private _getMonthInCurrentYear(date: D | null) {
    return date && this._dateAdapter.getYear(date) === this._dateAdapter.getYear(this.activeDate) ?
        this._dateAdapter.getMonth(date) : null;
  }

  /** Creates an SatCalendarCell for the given month. */
  private _createCellForMonth(month: number, monthName: string) {
    const ariaLabel = this._dateAdapter.format(
        this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1),
        this._dateFormats.display.monthYearA11yLabel);
    return new SatCalendarCell(
        month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month));
  }

  /** Whether the given month is enabled. */
  private _shouldEnableMonth(month: number) {

    const activeYear = this._dateAdapter.getYear(this.activeDate);

    if (month === undefined || month === null ||
        this._isYearAndMonthAfterMaxDate(activeYear, month) ||
        this._isYearAndMonthBeforeMinDate(activeYear, month)) {
      return false;
    }

    if (!this.dateFilter) {
      return true;
    }

    const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);

    // If any date in the month is enabled count the month as enabled.
    for (let date = firstOfMonth; this._dateAdapter.getMonth(date) === month;
         date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Tests whether the combination month/year is after this.maxDate, considering
   * just the month and year of this.maxDate
   */
  private _isYearAndMonthAfterMaxDate(year: number, month: number) {
    if (this.maxDate) {
      const maxYear = this._dateAdapter.getYear(this.maxDate);
      const maxMonth = this._dateAdapter.getMonth(this.maxDate);

      return year > maxYear || (year === maxYear && month > maxMonth);
    }

    return false;
  }

  /**
   * Tests whether the combination month/year is before this.minDate, considering
   * just the month and year of this.minDate
   */
  private _isYearAndMonthBeforeMinDate(year: number, month: number) {
    if (this.minDate) {
      const minYear = this._dateAdapter.getYear(this.minDate);
      const minMonth = this._dateAdapter.getMonth(this.minDate);

      return year < minYear || (year === minYear && month < minMonth);
    }

    return false;
  }

  /**
   * @param obj The object to check.
   * @returns The given object if it is both a date instance and valid, otherwise null.
   */
  private _getValidDateOrNull(obj: any): D | null {
    return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
  }

  /** Determines whether the user has the RTL layout direction. */
  private _isRtl() {
    return this._dir && this._dir.value === 'rtl';
  }

  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  private _getDateInCurrentMonth(date: D | null): number | null {
    return date && this._hasSameMonthAndYear(date, this.activeDate) ?
        this._dateAdapter.getDate(date) : null;
  }

  /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
  private _hasSameMonthAndYear(d1: D | null, d2: D | null): boolean {
    return !!(d1 && d2 && this._dateAdapter.getMonth(d1) === this._dateAdapter.getMonth(d2) &&
              this._dateAdapter.getYear(d1) === this._dateAdapter.getYear(d2));
  }

  /** Updates range full parameter on each begin or end of interval update.
   * Necessary to display calendar-body correctly
   */
  private updateRangeSpecificValues(): void {
    // console.log(JSON.stringify({
    //   begin: this._beginMonth,
    //   end: this._endMonth
    // }, null, 4));
    if (this.rangeMode) {
      this._beginMonthNumber = this._getMonthInCurrentYear(this._beginMonth);
      this._endMonthNumber = this._getMonthInCurrentYear(this._endMonth);
      this._rangeFull = this.beginMonth && this.endMonth && !this._beginMonthNumber &&
        !this._endMonthNumber &&
        this._dateAdapter.compareDate(this.beginMonth, this.activeDate) <= 0 &&
        this._dateAdapter.compareDate(this.activeDate, this.endMonth) <= 0;
    } else {
      this._beginMonthNumber = this._endMonthNumber = null;
      this._rangeFull = false;
    }
    // console.log(this._dateAdapter.getMonth(this._activeDate));
    // console.log(JSON.stringify({
    //   '开始': this._beginMonth,
    //   '结束': this._endMonth
    // }, null, 4));
  }
}
