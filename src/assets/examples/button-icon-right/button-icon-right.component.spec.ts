import { TestBed, inject } from '@angular/core/testing';

import { ButtonIconRightComponent } from './button-icon-right.component';

describe('a button-icon-right component', () => {
	let component: ButtonIconRightComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ButtonIconRightComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ButtonIconRightComponent], (ButtonIconRightComponent) => {
		component = ButtonIconRightComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});