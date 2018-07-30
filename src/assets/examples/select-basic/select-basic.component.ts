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
      "title": "Option1"
    },
    {
      "id": 2,
      "title": "Option2"
    },
    {
      "id": 3,
      "title": "Option3"
    },
    {
      "id": 4,
      "title": "Option4"
    }
  ]
}

export const SelectBasicData = {
  name: 'Select'
}