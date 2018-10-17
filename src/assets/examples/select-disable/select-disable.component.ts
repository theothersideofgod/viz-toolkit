import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'select-disable',
  templateUrl: 'select-disable.component.html',
  styleUrls: ['select-disable.component.css']
})
export class SelectDisableComponent implements OnInit {
  selected = 'Date Received';
  types = [
    'Date Received',
    'Discharge Date',
    'Invoice Date',
    'Placeholder'
  ];
  ngOnInit() {}
}

export const SelectDisableData = {
  name: 'SelectDisable'
};
