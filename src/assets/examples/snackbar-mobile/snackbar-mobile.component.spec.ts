import { TestBed, inject } from '@angular/core/testing';

import { SnackbarMobileComponent } from './snackbar-mobile.component';

describe('a snackbar-mobile component', () => {
	let component: SnackbarMobileComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SnackbarMobileComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SnackbarMobileComponent], (SnackbarMobileComponent) => {
		component = SnackbarMobileComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});