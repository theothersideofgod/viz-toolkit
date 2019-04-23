import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Datepicker selected value */
@Component({
  selector: 'datepicker-value',
  templateUrl: 'datepicker-value.component.html',
  styleUrls: ['datepicker-value.component.css'],
})
export class DatepickerValueComponent {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}
