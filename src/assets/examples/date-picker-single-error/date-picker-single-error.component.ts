import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { DateAdapter } from 'libs/components/date-range-picker/datetime';
import { NativeDateAdapter, MatDatepickerInputEvent } from '@angular/material';

function notOverEighteen(control: AbstractControl) {
  if (
    control.value instanceof Date &&
    new Date().getFullYear() - control.value.getFullYear() < 18
  ) {
    return {
      notOverEighteen: true
    };
  }
  return null;
}

@Component({
  selector: 'date-picker-single-error',
  templateUrl: 'date-picker-single-error.component.html',
  styleUrls: ['date-picker-single-error.component.css']
})
export class DatePickerSingleErrorComponent implements OnInit {
  dateFormControl = new FormControl('', [Validators.required, notOverEighteen]);
  cEvent;
  iEvent;
  ngOnInit() {}
  onClose() {}
  changeEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.cEvent = `${event.value}`;
  }
  inputEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.iEvent = `${event.value}`;
  }
}

export const DatePickerSingleErrorData = {
  name: 'DatePickerSingleError'
};
