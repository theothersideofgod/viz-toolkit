import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'feedback-indicator-basic',
  templateUrl: 'feedback-indicator-basic.component.html',
  styleUrls: ['feedback-indicator-basic.component.css'],
})

export class FeedbackIndicatorBasicComponent implements OnInit {
  ngOnInit() { }
}

export const FeedbackIndicatorBasicData = {
	name: 'FeedbackIndicatorBasic'
}