import { TestBed, inject } from '@angular/core/testing';

import { StepperBasicComponent } from './stepper-basic.component';

describe('a stepper-basic component', () => {
	let component: StepperBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				StepperBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([StepperBasicComponent], (StepperBasicComponent) => {
		component = StepperBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});