import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'slider-event',
  templateUrl: 'slider-event.component.html',
  styleUrls: ['slider-event.component.css'],
})

export class SliderEventComponent implements OnInit {
  value:number=50
  ngOnInit() { }
  onChange(event) {
    this.value = event.value
  }
}

export const SliderEventData = {
	name: 'SliderEvent'
}