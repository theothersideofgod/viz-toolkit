import { TestBed, inject } from '@angular/core/testing';

import { VizRadioButtonComponent } from './viz-radio-button.component';

describe('a viz-radio-button component', () => {
	let component: VizRadioButtonComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VizRadioButtonComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VizRadioButtonComponent], (VizRadioButtonComponent) => {
		component = VizRadioButtonComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});