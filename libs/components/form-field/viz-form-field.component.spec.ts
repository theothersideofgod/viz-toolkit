import { TestBed, inject } from '@angular/core/testing';

import { VizFormFieldComponent } from './viz-form-field.component';

describe('a viz-form-field component', () => {
	let component: VizFormFieldComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VizFormFieldComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VizFormFieldComponent], (VizFormFieldComponent) => {
		component = VizFormFieldComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});