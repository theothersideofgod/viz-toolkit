import { TestBed, inject } from '@angular/core/testing';

import { FeedbackIndicatorBasicComponent } from './feedback-indicator-basic.component';

describe('a feedback-indicator-basic component', () => {
	let component: FeedbackIndicatorBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FeedbackIndicatorBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FeedbackIndicatorBasicComponent], (FeedbackIndicatorBasicComponent) => {
		component = FeedbackIndicatorBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});