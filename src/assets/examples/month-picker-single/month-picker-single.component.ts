import { Component, OnInit } from '@angular/core';
import { matRangeDatepickerRangeValue, DateAdapter } from 'mat-range-datepicker';
@Component({
  selector: 'month-picker-single',
  templateUrl: 'month-picker-single.component.html',
  styleUrls: ['month-picker-single.component.scss']
})
export class MonthPickerSingleComponent implements OnInit {

  applyDateRange(event) {

  }
  ngOnInit() {}
}

export const MonthPickerSingleData = {
  name: 'MonthPickerSingle'
};
