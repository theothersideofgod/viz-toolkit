import { TestBed, inject } from '@angular/core/testing';

import { FeedbackIndicatorSuccessComponent } from './feedback-indicator-success.component';

describe('a feedback-indicator-success component', () => {
	let component: FeedbackIndicatorSuccessComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FeedbackIndicatorSuccessComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FeedbackIndicatorSuccessComponent], (FeedbackIndicatorSuccessComponent) => {
		component = FeedbackIndicatorSuccessComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});