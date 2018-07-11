import { Component, OnInit, AfterViewInit, Input, Pipe, PipeTransform, Optional } from '@angular/core';
import { matRangeDatepickerInputEvent, matRangeDatepickerRangeValue, DateAdapter } from "mat-range-datepicker";

@Component({
  selector: 'viz-app-date-range-picker',
  templateUrl: './viz-date-range-picker.component.html',
  styleUrls: ['./viz-date-range-picker.component.scss']
})
export class VizDateRangePickerComponent {
  @Input()
  date: matRangeDatepickerRangeValue<Date> ;
  lastDateInput: matRangeDatepickerRangeValue<Date> | null;
  lastDateChange: matRangeDatepickerRangeValue<Date> | null;

  onDateInput = (e: matRangeDatepickerInputEvent<Date>) => this.lastDateInput = e.value as matRangeDatepickerRangeValue<Date>;
  onDateChange = (e: matRangeDatepickerInputEvent<Date>) => {
    console.log('date', e.value);
    this.lastDateChange = e.value as matRangeDatepickerRangeValue<Date>;
  }
}


@Pipe({name: 'lastdays'})
export class LastDaysPipe<D> implements PipeTransform {

  constructor(
    @Optional() private _dateAdapter: DateAdapter<Date>,
  ) {}

  transform(value: matRangeDatepickerRangeValue<Date> | D | null, options: string): any {
    if (value && value.hasOwnProperty('begin')) {
      let _value = <matRangeDatepickerRangeValue<Date>> value;
      if (this._dateAdapter.sameDate(this._dateAdapter.today(), _value.end)) {
        // return "Last ? Days";
        return _value;
        
      } else {
        return _value;
      }
    } else {
      return value;
    }
  }
}

