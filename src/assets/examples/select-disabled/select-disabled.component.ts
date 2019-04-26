import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Disabled select */
@Component({
  selector: 'select-disabled',
  templateUrl: 'select-disabled.component.html',
  styleUrls: ['select-disabled.component.css'],
})
export class SelectDisabledComponent {
  disableSelect = new FormControl(false);
}
