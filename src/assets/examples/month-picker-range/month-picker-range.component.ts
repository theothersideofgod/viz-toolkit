import { Component, OnInit } from '@angular/core';
import {
  matRangeDatepickerRangeValue,
  DateAdapter
} from 'mat-range-datepicker';
@Component({
  selector: 'month-picker-range',
  templateUrl: 'month-picker-range.component.html',
  styleUrls: ['month-picker-range.component.scss']
})
export class MonthPickerRangeComponent implements OnInit {
  dateRange: matRangeDatepickerRangeValue<Date>;


  applyDateRange(event) {}
  ngOnInit() {}
  onClose() {}
}

export const MonthPickerRangeData = {
  name: 'MonthPickerRange'
};
