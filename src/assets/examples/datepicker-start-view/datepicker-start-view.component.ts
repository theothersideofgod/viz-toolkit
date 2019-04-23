import {Component} from '@angular/core';

/** @title Datepicker start date */
@Component({
  selector: 'datepicker-start-view',
  templateUrl: 'datepicker-start-view.component.html',
  styleUrls: ['datepicker-start-view.component.css'],
})
export class DatepickerStartViewComponent {
  startDate = new Date(1990, 0, 1);
}
