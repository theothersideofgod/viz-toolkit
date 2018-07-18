import { TestBed, inject } from '@angular/core/testing';

import { FormFieldBasicComponent } from './form-field-basic.component';

describe('a form-field-basic component', () => {
	let component: FormFieldBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FormFieldBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FormFieldBasicComponent], (FormFieldBasicComponent) => {
		component = FormFieldBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});