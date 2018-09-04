import { TestBed, inject } from '@angular/core/testing';

import { FormFieldErrorComponent } from './form-field-error.component';

describe('a form-field-error component', () => {
	let component: FormFieldErrorComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FormFieldErrorComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FormFieldErrorComponent], (FormFieldErrorComponent) => {
		component = FormFieldErrorComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});