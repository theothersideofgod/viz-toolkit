import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'select-error-state',
  templateUrl: 'select-error-state.component.html',
  styleUrls: ['select-error-state.component.css']
})
export class SelectErrorStateComponent implements OnInit {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid')
  ]);
  types = [
    'Date Received',
    'Discharge Date',
    'Invoice Date',
    'Placeholder'
  ];
  matcher = new MyErrorStateMatcher();
  ngOnInit() {}
}

export const SelectErrorStateData = {
  name: 'SelectErrorState'
};
