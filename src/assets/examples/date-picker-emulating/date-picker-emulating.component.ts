import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'date-picker-emulating',
  templateUrl: 'date-picker-emulating.component.html',
  styleUrls: ['date-picker-emulating.component.css']
})
export class DatePickerEmulatingComponent implements OnInit {
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  ngOnInit() {}
}

export const DatePickerEmulatingData = {
  name: 'DatePickerEmulating'
};
