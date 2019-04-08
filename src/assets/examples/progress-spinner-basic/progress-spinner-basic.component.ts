import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'progress-spinner-basic',
  templateUrl: 'progress-spinner-basic.component.html',
  styleUrls: ['progress-spinner-basic.component.css']
})
export class ProgressSpinnerBasicComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  ngOnInit() {}
}

export const ProgressSpinnerBasicData = {
  name: 'ProgressSpinnerBasic'
};
