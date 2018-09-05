import { TestBed, inject } from '@angular/core/testing';

import { ButtonStrokedComponent } from './button-stroked.component';

describe('a button-stroked component', () => {
	let component: ButtonStrokedComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ButtonStrokedComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ButtonStrokedComponent], (ButtonStrokedComponent) => {
		component = ButtonStrokedComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});