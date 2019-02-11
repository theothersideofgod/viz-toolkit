import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'select-trigger-text',
  templateUrl: 'select-trigger-text.component.html',
  styleUrls: ['select-trigger-text.component.css']
})
export class SelectTriggerTextComponent implements OnInit {
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

export const SelectTriggerTextData = {
  name: 'SelectTriggerText'
};
