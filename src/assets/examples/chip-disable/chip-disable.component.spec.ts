import { TestBed, inject } from '@angular/core/testing';

import { ChipDisableComponent } from './chip-disable.component';

describe('a chip-disable component', () => {
	let component: ChipDisableComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ChipDisableComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ChipDisableComponent], (ChipDisableComponent) => {
		component = ChipDisableComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});