import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

/** @title Datepicker input and change events */
@Component({
  selector: 'datepicker-events',
  templateUrl: 'datepicker-events.component.html',
  styleUrls: ['datepicker-events.component.css'],
})
export class DatepickerEventsComponent {
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
}
