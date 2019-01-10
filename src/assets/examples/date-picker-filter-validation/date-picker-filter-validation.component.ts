import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-picker-filter-validation',
  templateUrl: 'date-picker-filter-validation.component.html',
  styleUrls: ['date-picker-filter-validation.component.css']
})
export class DatePickerFilterValidationComponent implements OnInit {
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  ngOnInit() {}
}

export const DatePickerFilterValidationData = {
  name: 'DatePickerFilterValidation'
};
