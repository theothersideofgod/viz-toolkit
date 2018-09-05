import { TestBed, inject } from '@angular/core/testing';

import { ButtonTextComponent } from './button-text.component';

describe('a button-text component', () => {
	let component: ButtonTextComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ButtonTextComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ButtonTextComponent], (ButtonTextComponent) => {
		component = ButtonTextComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});