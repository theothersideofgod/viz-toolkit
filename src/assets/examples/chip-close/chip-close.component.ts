import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chip-close',
  templateUrl: 'chip-close.component.html',
  styleUrls: ['chip-close.component.css']
})
export class ChipCloseComponent implements OnInit {
  chip = true;
  constructor() {}

  ngOnInit() {}
  remove() {
    this.chip = false;
  }
}

export const ChipCloseData = {
  name: 'ChipClose'
};
