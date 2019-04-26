import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/** @title Form field theming */
@Component({
  selector: 'form-field-theming',
  templateUrl: 'form-field-theming.component.html',
  styleUrls: ['form-field-theming.component.css'],
})
export class FormFieldThemingComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }
}
