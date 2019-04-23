import {Component} from '@angular/core';

/** @title Datepicker with min & max validation */
@Component({
  selector: 'datepicker-min-max',
  templateUrl: 'datepicker-min-max.component.html',
  styleUrls: ['datepicker-min-max.component.css'],
})
export class DatepickerMinMaxComponent {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
}
