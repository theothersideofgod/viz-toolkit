import { TestBed, inject } from '@angular/core/testing';

import { SliderContinueComponent } from './slider-continue.component';

describe('a slider-continue component', () => {
	let component: SliderContinueComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SliderContinueComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SliderContinueComponent], (SliderContinueComponent) => {
		component = SliderContinueComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});