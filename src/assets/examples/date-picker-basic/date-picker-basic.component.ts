import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker-basic',
  templateUrl: './date-picker-basic.component.html',
  styleUrls: ['./date-picker-basic.component.css']
})
export class DatePickerBasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const DatePickerBasicData = {
  name: 'DatePicker'
}