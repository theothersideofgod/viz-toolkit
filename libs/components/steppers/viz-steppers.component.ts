import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'viz-steppers',
  templateUrl: './viz-steppers.component.html',
  styleUrls: ['./viz-steppers.component.scss']
})
export class VizSteppersComponent implements OnInit {

  private _vertical: boolean;
  get vertical(): boolean {
    return this._vertical;
  }
  @Input()
  set vertical(value: boolean) {
    this._vertical = coerceBooleanProperty(value);
  }
  
  @Input() steps;
  @Output() stepClick = new EventEmitter();

  constructor() {}
  getStepperStyle(state) {
    return {
      finish: 'viz-step-icon-finish',
      progress: 'viz-step-icon-progress',
      waiting: 'viz-step-icon-waiting'
    }[state];
  }
  ngOnInit() {}
}
