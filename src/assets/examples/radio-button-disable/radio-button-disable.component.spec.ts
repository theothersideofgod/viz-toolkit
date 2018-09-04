import { TestBed, inject } from '@angular/core/testing';

import { RadioButtonDisableComponent } from './radio-button-disable.component';

describe('a radio-button-disable component', () => {
	let component: RadioButtonDisableComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RadioButtonDisableComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RadioButtonDisableComponent], (RadioButtonDisableComponent) => {
		component = RadioButtonDisableComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});