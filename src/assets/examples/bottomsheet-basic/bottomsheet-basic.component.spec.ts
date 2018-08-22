import { TestBed, inject } from '@angular/core/testing';

import { BottomsheetBasicComponent } from './bottomsheet-basic.component';

describe('a bottomsheet-basic component', () => {
	let component: BottomsheetBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BottomsheetBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([BottomsheetBasicComponent], (BottomsheetBasicComponent) => {
		component = BottomsheetBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});