import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * @title Stepper label bottom position
 */
@Component({
  selector: 'stepper-label-position-bottom',
  templateUrl: 'stepper-label-position-bottom.component.html',
  styleUrls: ['stepper-label-position-bottom.component.css'],
})
export class StepperLabelPositionBottomComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
