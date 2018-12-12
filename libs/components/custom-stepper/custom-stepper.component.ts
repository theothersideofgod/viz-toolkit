import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss']
})
export class CustomStepperComponent implements OnInit {
  @Input() steps
  constructor() { }

  ngOnInit() {
  }
  getStepperStyle(step) {
    return {
      finish: 'custom-stepper-icon-finish',
      progress: 'custom-stepper-icon-progress',
      waiting: 'custom-stepper-icon-waiting'
    }[step.status];
  }
  getStepLabelStyle(step) {
    return {
      finish: 'custom-stepper-label-finish',
      progress: 'custom-stepper-label-progress',
      waiting: 'custom-stepper-label-waiting'
    }[step.status];
  }
  getSubStepStyle(step) {
    return {
      finish: 'custom-stepper-sub-finish',
      progress: 'custom-stepper-sub-progress',
      waiting: 'custom-stepper-sub-waiting'
    }[step.status];
  }
}
