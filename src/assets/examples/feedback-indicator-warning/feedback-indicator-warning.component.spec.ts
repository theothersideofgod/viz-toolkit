import { TestBed, inject } from '@angular/core/testing';

import { FeedbackIndicatorWarningComponent } from './feedback-indicator-warning.component';

describe('a feedback-indicator-warning component', () => {
	let component: FeedbackIndicatorWarningComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FeedbackIndicatorWarningComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FeedbackIndicatorWarningComponent], (FeedbackIndicatorWarningComponent) => {
		component = FeedbackIndicatorWarningComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});