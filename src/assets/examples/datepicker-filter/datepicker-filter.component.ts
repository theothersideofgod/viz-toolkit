import {Component} from '@angular/core';

/** @title Datepicker with filter validation */
@Component({
  selector: 'datepicker-filter',
  templateUrl: 'datepicker-filter.component.html',
  styleUrls: ['datepicker-filter.component.css'],
})
export class DatepickerFilterComponent {
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
}
