import { Component, OnInit } from '@angular/core';
import { matRangeDatepickerRangeValue, DateAdapter } from 'mat-range-datepicker';
@Component({
  selector: 'date-picker-single',
  templateUrl: 'date-picker-single.component.html',
  styleUrls: ['date-picker-single.component.scss']
})
export class DatePickerSingleComponent implements OnInit {

  ngOnInit() {}
  applyDateRange(date) {
  }
}

export const DatePickerSingleData = {
  name: 'DatePickerSingle'
};
