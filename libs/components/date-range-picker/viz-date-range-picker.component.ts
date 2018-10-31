import { Component, OnInit, AfterViewInit, Input, Pipe, PipeTransform, Optional, Output, EventEmitter } from '@angular/core';
import { matRangeDatepickerInputEvent, matRangeDatepickerRangeValue, DateAdapter } from './public-api';

@Component({
  selector: 'viz-date-range-picker',
  templateUrl: './viz-date-range-picker.component.html',
  styleUrls: ['./viz-date-range-picker.component.scss']
})
export class VizDateRangePickerComponent implements OnInit {
  @Input()
  date: matRangeDatepickerRangeValue<Date> ;
  lastDateInput: matRangeDatepickerRangeValue<Date> | null;
  lastDateChange: matRangeDatepickerRangeValue<Date> | null;
  dateShot: matRangeDatepickerRangeValue<Date> | null;
  typeMode: string;

  @Output() apply = new EventEmitter<any> ();

  constructor(
    private _dateAdapter: DateAdapter<Date>,
  ) {}

  ngOnInit() {
    this.dateShot = this.date;
  }

  onDateInput = (e: matRangeDatepickerInputEvent<Date>) => {
    console.log('input', this.lastDateInput === e.value);
    this.lastDateInput = e.value as matRangeDatepickerRangeValue<Date>;
  }
  onDateChange = (e: matRangeDatepickerInputEvent<Date>) => {
    console.log('select', this.lastDateInput === e.value);
    this.lastDateChange = e.value as matRangeDatepickerRangeValue<Date>;
  }
  onInputDate($event) {
    this.date = $event;
  }
  onClose(event) {
    console.log(this.dateShot, this.date);
    if (!this.dateShot || !this.date) { return; }
    if (
      this._dateAdapter.sameDate(this.dateShot.begin, this.date.begin)
      &&
      this._dateAdapter.sameDate(this.dateShot.end, this.date.end)
    ) {

    } else {
      this.dateShot = this.date;
      this.apply.emit(this.date);
    }

  }
}


// @Pipe({name: 'lastdays'})
// export class LastDaysPipe<D> implements PipeTransform {

//   constructor(
//     @Optional() private _dateAdapter: DateAdapter<Date>,
//   ) {}

//   transform(value: matRangeDatepickerRangeValue<Date> | D | null, options: string): any {
//     if (value && value.hasOwnProperty('begin')) {
//       let _value = <matRangeDatepickerRangeValue<Date>> value;
//       if (this._dateAdapter.sameDate(this._dateAdapter.today(), _value.end)) {
//         // return "Last ? Days";
//         return _value;

//       } else {
//         return _value;
//       }
//     } else {
//       return value;
//     }
//   }
// }

