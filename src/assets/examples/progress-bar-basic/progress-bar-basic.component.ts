import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-basic',
  templateUrl: './progress-bar-basic.component.html',
  styleUrls: ['./progress-bar-basic.component.css']
})
export class ProgressBarBasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const ProgressBarBasicData = {
	name: 'Progress Bar'
}