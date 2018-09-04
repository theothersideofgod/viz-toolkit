import { TestBed, inject } from '@angular/core/testing';

import { CheckboxDisableComponent } from './checkbox-disable.component';

describe('a checkbox-disable component', () => {
	let component: CheckboxDisableComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CheckboxDisableComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CheckboxDisableComponent], (CheckboxDisableComponent) => {
		component = CheckboxDisableComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});