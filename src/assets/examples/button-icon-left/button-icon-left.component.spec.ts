import { TestBed, inject } from '@angular/core/testing';

import { ButtonIconLeftComponent } from './button-icon-left.component';

describe('a button-icon-left component', () => {
	let component: ButtonIconLeftComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ButtonIconLeftComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ButtonIconLeftComponent], (ButtonIconLeftComponent) => {
		component = ButtonIconLeftComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});