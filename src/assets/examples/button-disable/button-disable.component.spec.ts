import { TestBed, inject } from '@angular/core/testing';

import { ButtonDisableComponent } from './button-disable.component';

describe('a button-disable component', () => {
	let component: ButtonDisableComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ButtonDisableComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ButtonDisableComponent], (ButtonDisableComponent) => {
		component = ButtonDisableComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});