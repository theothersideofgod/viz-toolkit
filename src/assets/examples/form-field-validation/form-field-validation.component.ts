import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'form-field-validation',
  templateUrl: 'form-field-validation.component.html',
  styleUrls: ['form-field-validation.component.css']
})
export class FormFieldValidationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  message: string;

  constructor() {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.message = 'information need to be confirm'
      return;
    }

    this.message = 'successed'
  }
}

export const FormFieldValidationData = {
  name: 'FormFieldValidation'
};
