import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'month-picker-range',
  templateUrl: 'month-picker-range.component.html',
  styleUrls: ['month-picker-range.component.scss'],
})
export class MonthPickerRangeComponent implements OnInit {
  ngOnInit() { }
}

export const MonthPickerRangeData = {
	name: 'MonthPickerRange'
};
