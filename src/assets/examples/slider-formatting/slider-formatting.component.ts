import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider-formatting',
  templateUrl: 'slider-formatting.component.html',
  styleUrls: ['slider-formatting.component.css']
})
export class SliderFormattingComponent implements OnInit {
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  ngOnInit() {}
}

export const SliderFormattingData = {
  name: 'SliderFormatting'
};
