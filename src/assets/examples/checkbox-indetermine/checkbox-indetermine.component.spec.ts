import { TestBed, inject } from '@angular/core/testing';

import { CheckboxIndetermineComponent } from './checkbox-indetermine.component';

describe('a checkbox-indetermine component', () => {
	let component: CheckboxIndetermineComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CheckboxIndetermineComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CheckboxIndetermineComponent], (CheckboxIndetermineComponent) => {
		component = CheckboxIndetermineComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});