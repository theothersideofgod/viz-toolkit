import { TestBed, inject } from '@angular/core/testing';

import { SelectDisableComponent } from './select-disable.component';

describe('a select-disable component', () => {
	let component: SelectDisableComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SelectDisableComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SelectDisableComponent], (SelectDisableComponent) => {
		component = SelectDisableComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});