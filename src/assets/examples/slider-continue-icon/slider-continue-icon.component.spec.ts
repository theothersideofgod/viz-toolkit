import { TestBed, inject } from '@angular/core/testing';

import { SliderContinueIconComponent } from './slider-continue-icon.component';

describe('a slider-continue-icon component', () => {
	let component: SliderContinueIconComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SliderContinueIconComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SliderContinueIconComponent], (SliderContinueIconComponent) => {
		component = SliderContinueIconComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});