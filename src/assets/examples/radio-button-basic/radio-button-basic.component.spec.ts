import { TestBed, inject } from '@angular/core/testing';

import { RadioButtonBasicComponent } from './radio-button-basic.component';

describe('a radio-button-basic component', () => {
	let component: RadioButtonBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RadioButtonBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RadioButtonBasicComponent], (RadioButtonBasicComponent) => {
		component = RadioButtonBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});