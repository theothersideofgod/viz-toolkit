import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Select with custom trigger text */
@Component({
  selector: 'select-custom-trigger',
  templateUrl: 'select-custom-trigger.component.html',
  styleUrls: ['select-custom-trigger.component.css'],
})
export class SelectCustomTriggerComponent {
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
