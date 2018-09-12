import { TestBed, inject } from '@angular/core/testing';

import { SliderRangeIconComponent } from './slider-range-icon.component';

describe('a slider-range-icon component', () => {
	let component: SliderRangeIconComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SliderRangeIconComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SliderRangeIconComponent], (SliderRangeIconComponent) => {
		component = SliderRangeIconComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});