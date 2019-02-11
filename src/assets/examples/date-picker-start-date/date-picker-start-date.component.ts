import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'date-picker-start-date',
  templateUrl: 'date-picker-start-date.component.html',
  styleUrls: ['date-picker-start-date.component.css'],
})
export class DatePickerStartDateComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  ngOnInit() { }
}

export const DatePickerStartDateData = {
	name: 'DatePickerStartDate'
}