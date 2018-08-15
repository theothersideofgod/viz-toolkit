import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-basic',
  templateUrl: './select-basic.component.html',
  styleUrls: ['./select-basic.component.scss']
})
export class SelectBasicComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  options = [
    {
      "id": 1,
      "title": "Date Received"
    },
    {
      "id": 2,
      "title": "Dsicharge Date"
    },
    {
      "id": 3,
      "title": "Invoice Date"
    },
    {
      "id": 4,
      "title": "Placeholder..."
    }
  ]
}

export const SelectBasicData = {
  name: 'Select'
}