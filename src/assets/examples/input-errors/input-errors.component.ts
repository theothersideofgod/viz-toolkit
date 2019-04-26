import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/**
 * @title Input with error messages
 */
@Component({
  selector: 'input-errors',
  templateUrl: 'input-errors.component.html',
  styleUrls: ['input-errors.component.css'],
})
export class InputErrorsComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
