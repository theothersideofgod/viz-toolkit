import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-picker-min-max-validation',
  templateUrl: 'date-picker-min-max-validation.component.html',
  styleUrls: ['date-picker-min-max-validation.component.css']
})
export class DatePickerMinMaxValidationComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  ngOnInit() {}
}

export const DatePickerMinMaxValidationData = {
  name: 'DatePickerMinMaxValidation'
};
