import { Component } from '@angular/core';
import { matRangeDatepickerRangeValue, DateAdapter } from 'mat-range-datepicker';

@Component({
  selector: 'app-date-picker-basic',
  templateUrl: './date-picker-basic.component.html',
  styleUrls: ['./date-picker-basic.component.scss']
})
export class DatePickerBasicComponent {
  dateRange: matRangeDatepickerRangeValue<Date>;

  constructor(
    private _dateAdapter: DateAdapter<Date>,
  ) {
    this.dateRange = {
      begin: this._dateAdapter.addCalendarMonths(this._dateAdapter.today(), -3),
      end: this._dateAdapter.today(),
    };
  }

  applyDateRange(event) {

  }

}

export const DatePickerBasicData = {
  name: 'DatePicker'
};
