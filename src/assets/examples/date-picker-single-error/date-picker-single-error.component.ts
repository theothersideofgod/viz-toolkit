import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { DateAdapter } from 'libs/components/date-range-picker/datetime';
import { NativeDateAdapter } from '@angular/material';

@Component({
  selector: 'date-picker-single-error',
  templateUrl: 'date-picker-single-error.component.html',
  styleUrls: ['date-picker-single-error.component.scss']
})
export class DatePickerSingleErrorComponent implements OnInit {
  dateFormControl = new FormControl('', [Validators.required]);
  ngOnInit() {}
  onClose() {}
}

export const DatePickerSingleErrorData = {
  name: 'DatePickerSingleError'
};
