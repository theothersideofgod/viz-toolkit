import { TestBed, inject } from '@angular/core/testing';

import { VizSliderComponent } from './viz-slider.component';

describe('a viz-slider component', () => {
	let component: VizSliderComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VizSliderComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VizSliderComponent], (VizSliderComponent) => {
		component = VizSliderComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});