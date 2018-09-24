import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-disable',
  templateUrl: 'select-disable.component.html',
  styleUrls: ['select-disable.component.css']
})
export class SelectDisableComponent implements OnInit {
  options = [
    {
      id: 1,
      title: 'Date Received'
    },
    {
      id: 2,
      title: 'Dsicharge Date'
    },
    {
      id: 3,
      title: 'Invoice Date'
    },
    {
      id: 4,
      title: 'Placeholder...'
    }
  ];
  ngOnInit() {}
}

export const SelectDisableData = {
  name: 'SelectDisable'
};
