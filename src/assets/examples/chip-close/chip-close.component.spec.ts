import { TestBed, inject } from '@angular/core/testing';

import { ChipCloseComponent } from './chip-close.component';

describe('a chip-close component', () => {
	let component: ChipCloseComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ChipCloseComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ChipCloseComponent], (ChipCloseComponent) => {
		component = ChipCloseComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});