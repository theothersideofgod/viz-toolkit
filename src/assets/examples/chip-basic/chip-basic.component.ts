import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-basic',
  templateUrl: './chip-basic.component.html',
  styleUrls: ['./chip-basic.component.css']
})
export class ChipBasicComponent implements OnInit {
  chip = true;
  constructor() {}

  ngOnInit() {}
  remove() {
    this.chip = false;
  }
}
export const ChipBasicData = {
  name: 'Chip'
};
