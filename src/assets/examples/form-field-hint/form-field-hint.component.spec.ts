import { TestBed, inject } from '@angular/core/testing';

import { FormFieldHintComponent } from './form-field-hint.component';

describe('a form-field-hint component', () => {
	let component: FormFieldHintComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FormFieldHintComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FormFieldHintComponent], (FormFieldHintComponent) => {
		component = FormFieldHintComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});