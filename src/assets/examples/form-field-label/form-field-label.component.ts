import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

/** @title Form field with label */
@Component({
  selector: 'form-field-label',
  templateUrl: 'form-field-label.component.html',
  styleUrls: ['form-field-label.component.css'],
})
export class FormFieldLabelComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
}
