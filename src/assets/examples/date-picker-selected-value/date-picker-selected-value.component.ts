import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'date-picker-selected-value',
  templateUrl: 'date-picker-selected-value.component.html',
  styleUrls: ['date-picker-selected-value.component.css'],
})
export class DatePickerSelectedValueComponent implements OnInit {
  date = new FormControl(new Date());
  ngOnInit() { }
}

export const DatePickerSelectedValueData = {
	name: 'DatePickerSelectedValue'
}