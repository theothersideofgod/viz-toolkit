import { TestBed, inject } from '@angular/core/testing';

import { FormFieldTextareaComponent } from './form-field-textarea.component';

describe('a form-field-textarea component', () => {
	let component: FormFieldTextareaComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FormFieldTextareaComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FormFieldTextareaComponent], (FormFieldTextareaComponent) => {
		component = FormFieldTextareaComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});