import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'autocomplete-simple',
  templateUrl: 'autocomplete-simple.component.html',
  styleUrls: ['autocomplete-simple.component.css']
})
export class AutocompleteSimpleComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  ngOnInit() {}
}

export const AutocompleteSimpleData = {
  name: 'AutocompleteSimple'
};
