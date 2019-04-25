import {Component} from '@angular/core';

/**
 * @title Expansion panel as accordion
 */
@Component({
  selector: 'expansion-steps',
  templateUrl: 'expansion-steps.component.html',
  styleUrls: ['expansion-steps.component.css'],
})
export class ExpansionStepsComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
