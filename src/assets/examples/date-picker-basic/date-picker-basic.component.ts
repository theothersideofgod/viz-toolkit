import { Component } from '@angular/core';
import {
  matRangeDatepickerRangeValue,
  DateAdapter
} from 'mat-range-datepicker';

@Component({
  selector: 'app-date-picker-basic',
  templateUrl: './date-picker-basic.component.html',
  styleUrls: ['./date-picker-basic.component.scss']
})
export class DatePickerBasicComponent {
  dateRange: matRangeDatepickerRangeValue<Date>;

  constructor() {}

  applyDateRange(event) {}
}

export const DatePickerBasicData = {
  name: 'DatePicker'
};
