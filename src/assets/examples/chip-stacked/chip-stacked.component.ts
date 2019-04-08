import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'chip-stacked',
  templateUrl: 'chip-stacked.component.html',
  styleUrls: ['chip-stacked.component.css']
})
export class ChipStackedComponent {
  availableColors: ChipColor[] = [
    { name: 'Primary', color: 'primary' },
    { name: 'Secondary', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
}

export const ChipStackedData = {
  name: 'ChipStacked'
};
