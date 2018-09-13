import { TestBed, inject } from '@angular/core/testing';

import { SliderRangeEventComponent } from './slider-range-event.component';

describe('a slider-range-event component', () => {
	let component: SliderRangeEventComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SliderRangeEventComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SliderRangeEventComponent], (SliderRangeEventComponent) => {
		component = SliderRangeEventComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});