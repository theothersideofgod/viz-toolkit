import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-select-basic',
  templateUrl: './select-basic.component.html',
  styleUrls: ['./select-basic.component.scss']
})
export class SelectBasicComponent implements OnInit {
  selected = 'Date Received';
  types = [
    'Date Received',
    'Discharge Date',
    'Invoice Date',
    'Placeholder'
  ];
  constructor() {}

  ngOnInit() {}
}

export const SelectBasicData = {
  name: 'Select'
};
