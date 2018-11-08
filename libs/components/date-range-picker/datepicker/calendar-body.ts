/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    NgZone,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {take} from 'rxjs/operators';

/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
export class SatCalendarCell {
  constructor(public value: number,
              public displayValue: string,
              public ariaLabel: string,
              public enabled: boolean) {}
}

/* tslint:disable */
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
@Component({
  moduleId: module.id,
  selector: '[sat-calendar-body]',
  templateUrl: 'calendar-body.html',
  styleUrls: ['calendar-body.css'],
  host: {
    'class': 'mat-calendar-body',
    'role': 'grid',
    'attr.aria-readonly': 'true'
  },
  exportAs: 'matCalendarBody',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SatCalendarBody {
  /** The label for the table. (e.g. "Jan 2017"). */
  @Input() label: string;

  /** The cells to display in the table. */
  @Input() rows: SatCalendarCell[][];

  /** The value in the table that corresponds to today. */
  @Input() todayValue: number;

  /** The value in the table that is currently selected. */
  @Input() selectedValue: number;

  /** The value in the table since range of dates started.
   * Null means no interval or interval doesn't start in this month
   */
  @Input() begin: number|null;

  /** The value in the table representing end of dates range.
   * Null means no interval or interval doesn't end in this month
   */
  @Input() end: number|null;

  /** Whether to mark all dates as semi-selected. */
  @Input() rangeFull: boolean;

  /** Whether to use date range selection behaviour.*/
  @Input() rangeMode = false;

  /** The minimum number of free cells needed to fit the label in the first row. */
  @Input() labelMinRequiredCells: number;

  /** The number of columns in the table. */
  @Input() numCols = 7;

  /** Whether to allow selection of disabled cells. */
  @Input() allowDisabledSelection = false;

  /** The cell number of the active cell in the table. */
  @Input() activeCell = 0;

  /**
   * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
   * maintained even as the table resizes.
   */
  @Input() cellAspectRatio = 1;

  /** Emits when a new value is selected. */
  @Output() readonly selectedValueChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private _elementRef: ElementRef, private _ngZone: NgZone) { }

  _cellClicked(cell: SatCalendarCell): void {
    if (!this.allowDisabledSelection && !cell.enabled) {
      return;
    }
    this.selectedValueChange.emit(cell.value);
  }

  /** The number of blank cells to put at the beginning for the first row. */
  get _firstRowOffset(): number {
    return this.rows && this.rows.length && this.rows[0].length ?
        this.numCols - this.rows[0].length : 0;
  }

  _isActiveCell(rowIndex: number, colIndex: number): boolean {
    let cellNumber = rowIndex * this.numCols + colIndex;

    // Account for the fact that the first row may not have as many cells.
    if (rowIndex) {
      cellNumber -= this._firstRowOffset;
    }

    return cellNumber === this.activeCell;
  }

  /** Whenever to mark cell as semi-selected (inside dates interval). */
  _isSemiSelected(date: number) {
    if (!this.rangeMode) {
      return false;
    }
    if (this.rangeFull) {
      return true;
    }
    /** Do not mark start and end of interval. */
    if (date === this.begin || date === this.end) {
      return false;
    }
    if (this.begin && !this.end) {
      return date > this.begin;
    }
    if (this.end && !this.begin) {
      return date < this.end;
    }
    return date > <number>this.begin && date < <number>this.end;
  }

    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell() {
        this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
                this._elementRef.nativeElement.querySelector('.mat-calendar-body-active').focus();
            });
        });
    }
}
