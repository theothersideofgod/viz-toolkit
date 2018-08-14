import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'viz-feedback-indicator',
  templateUrl: './viz-feedback-indicator.component.html',
  styleUrls: ['./viz-feedback-indicator.component.scss']
})
export class VizFeedbackIndicatorComponent implements OnInit {
  @Input('message') message: string;
  @Input('type') type: string;
  constructor() { }

  ngOnInit() {
  }

}
