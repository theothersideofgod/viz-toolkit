import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'month-picker-single',
  templateUrl: 'month-picker-single.component.html',
  styleUrls: ['month-picker-single.component.scss']
})
export class MonthPickerSingleComponent implements OnInit {
  ngOnInit() {}
}

export const MonthPickerSingleData = {
  name: 'MonthPickerSingle'
};
