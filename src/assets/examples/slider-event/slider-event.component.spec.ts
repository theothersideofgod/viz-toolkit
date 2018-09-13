import { TestBed, inject } from '@angular/core/testing';

import { SliderEventComponent } from './slider-event.component';

describe('a slider-event component', () => {
	let component: SliderEventComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SliderEventComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SliderEventComponent], (SliderEventComponent) => {
		component = SliderEventComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});