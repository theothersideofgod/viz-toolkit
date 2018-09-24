import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-field-error',
  templateUrl: 'form-field-error.component.html',
  styleUrls: ['form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  ngOnInit() {}
}

export const FormFieldErrorData = {
  name: 'FormFieldError'
};
