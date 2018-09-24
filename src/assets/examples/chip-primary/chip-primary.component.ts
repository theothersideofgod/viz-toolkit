import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chip-primary',
  templateUrl: 'chip-primary.component.html',
  styleUrls: ['chip-primary.component.css']
})
export class ChipPrimaryComponent implements OnInit {
  chip = true;
  constructor() {}

  ngOnInit() {}
  remove() {
    this.chip = false;
  }
}

export const ChipPrimaryData = {
  name: 'ChipPrimary'
};
