import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'select-multiple-selection',
  templateUrl: 'select-multiple-selection.component.html',
  styleUrls: ['select-multiple-selection.component.css']
})
export class SelectMultipleSelectionComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = [
    'Alabama',
    'Californina',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii'
  ];
  ngOnInit() {}
}

export const SelectMultipleSelectionData = {
  name: 'SelectMultipleSelection'
};
