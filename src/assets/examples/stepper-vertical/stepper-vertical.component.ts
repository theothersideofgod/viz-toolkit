import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'stepper-vertical',
  templateUrl: 'stepper-vertical.component.html',
  styleUrls: ['stepper-vertical.component.css'],
})
export class StepperVerticalComponent implements OnInit {
  steps = [
    {
      index: 1,
      label: 'Fill out your name',
      status: 'finish'
    },
    {
      index: 2,
      label: 'Fill out your address',
      status: 'progress'
    },
    {
      index: 3,
      label: 'Done',
      status: 'waiting'
    }
  ];
  ngOnInit() {}
  handleClick(index) {
    this.steps.forEach((step, i) => {
      if (i < index) {
        step.status = 'finish';
      } else if(i > index) {
        step.status = 'waiting';
      } else {
        step.status = 'progress'
      }
    });
  }
}

export const StepperVerticalData = {
	name: 'StepperVertical'
}