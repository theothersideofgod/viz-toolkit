import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chip-disable',
  templateUrl: 'chip-disable.component.html',
  styleUrls: ['chip-disable.component.css']
})
export class ChipDisableComponent implements OnInit {
  chip = true;
  constructor() {}

  ngOnInit() {}
  remove() {
    this.chip = false;
  }
}

export const ChipDisableData = {
  name: 'ChipDisable'
};
