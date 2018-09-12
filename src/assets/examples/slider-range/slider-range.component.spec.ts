import { TestBed, inject } from '@angular/core/testing';

import { SliderRangeComponent } from './slider-range.component';

describe('a slider-range component', () => {
	let component: SliderRangeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SliderRangeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SliderRangeComponent], (SliderRangeComponent) => {
		component = SliderRangeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});