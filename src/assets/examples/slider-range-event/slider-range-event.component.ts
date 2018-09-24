import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider-range-event',
  templateUrl: 'slider-range-event.component.html',
  styleUrls: ['slider-range-event.component.css']
})
export class SliderRangeEventComponent implements OnInit {
  value: [number, number] = [100, 300];
  ngOnInit() {}
  onChange(event) {
    this.value = event;
  }
}

export const SliderRangeEventData = {
  name: 'SliderRangeEvent'
};
