import {Component} from '@angular/core';

/** @title Select with 2-way value binding */
@Component({
  selector: 'select-value-binding',
  templateUrl: 'select-value-binding.component.html',
  styleUrls: ['select-value-binding.component.css'],
})
export class SelectValueBindingComponent {
  selected = 'option2';
}
