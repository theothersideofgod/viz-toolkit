import { TestBed, inject } from '@angular/core/testing';

import { SliderBasicIconComponent } from './slider-basic-icon.component';

describe('a slider-basic-icon component', () => {
	let component: SliderBasicIconComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SliderBasicIconComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SliderBasicIconComponent], (SliderBasicIconComponent) => {
		component = SliderBasicIconComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});