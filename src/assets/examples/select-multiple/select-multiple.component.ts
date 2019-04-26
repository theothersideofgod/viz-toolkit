import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple',
  templateUrl: 'select-multiple.component.html',
  styleUrls: ['select-multiple.component.css'],
})
export class SelectMultipleComponent {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
