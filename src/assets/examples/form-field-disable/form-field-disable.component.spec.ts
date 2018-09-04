import { TestBed, inject } from '@angular/core/testing';

import { FormFieldDisableComponent } from './form-field-disable.component';

describe('a form-field-disable component', () => {
	let component: FormFieldDisableComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FormFieldDisableComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FormFieldDisableComponent], (FormFieldDisableComponent) => {
		component = FormFieldDisableComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});