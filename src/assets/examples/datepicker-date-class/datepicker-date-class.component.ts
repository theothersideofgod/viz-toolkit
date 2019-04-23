import {Component, ViewEncapsulation} from '@angular/core';

/** @title Datepicker with custom date classes */
@Component({
  selector: 'datepicker-date-class',
  templateUrl: 'datepicker-date-class.component.html',
  styleUrls: ['datepicker-date-class.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DatepickerDateClassComponent {
  dateClass = (d: Date) => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : undefined;
  }
}
