import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
	selector: 'date-picker-event',
  templateUrl: 'date-picker-event.component.html',
  styleUrls: ['date-picker-event.component.css'],
})

export class DatePickerEventComponent implements OnInit {
  events: string[] = [];
  ngOnInit() { }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
}

export const DatePickerEventData = {
	name: 'DatePickerEvent'
}