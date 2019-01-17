import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'date-picker-range-validation',
  templateUrl: 'date-picker-range-validation.component.html',
  styleUrls: ['date-picker-range-validation.component.css'],
})
export class DatePickerRangeValidationComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  onClose() {}
  ngOnInit() { }
}

export const DatePickerRangeValidationData = {
	name: 'DatePickerRangeValidation'
}