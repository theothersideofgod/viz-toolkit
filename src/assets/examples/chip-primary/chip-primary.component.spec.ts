import { TestBed, inject } from '@angular/core/testing';

import { ChipPrimaryComponent } from './chip-primary.component';

describe('a chip-primary component', () => {
	let component: ChipPrimaryComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ChipPrimaryComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ChipPrimaryComponent], (ChipPrimaryComponent) => {
		component = ChipPrimaryComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});