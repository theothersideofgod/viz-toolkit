import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-basic',
  templateUrl: './chip-basic.component.html',
  styleUrls: ['./chip-basic.component.css']
})
export class ChipBasicComponent implements OnInit {
  selectable = true;
  removable = true;
  chips = [
    { name: 'Extra soft', selected: false },
    { name: 'Soft', selected: false },
    { name: 'Medium', selected: true },
    { name: 'Hard', selected: false },
    { name: 'Extra hard', selected: false }
  ];

  

  constructor() {}

  ngOnInit() {}

  toggleChip(chip) {
    this.chips = this.chips.map(c => {
      if (c.name === chip.name) {
        return {
          ...c,
          selected: !c.selected
        };
      }
      return c;
    });
  }
}
export const ChipBasicData = {
  name: 'Chip'
};
