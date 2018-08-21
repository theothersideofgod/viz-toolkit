import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stepper-basic',
  templateUrl: 'stepper-basic.component.html',
  styleUrls: ['stepper-basic.component.css']
})
export class StepperBasicComponent implements OnInit {
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
}

export const StepperBasicData = {
  name: 'StepperBasic'
};
