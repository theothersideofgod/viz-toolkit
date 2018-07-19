import { TestBed, inject } from '@angular/core/testing';

import { SliderBasicComponent } from './slider-basic.component';

describe('a slider-basic component', () => {
	let component: SliderBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SliderBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SliderBasicComponent], (SliderBasicComponent) => {
		component = SliderBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});