import { TestBed, inject } from '@angular/core/testing';

import { SnackbarBasicComponent } from './snackbar-basic.component';

describe('a snackbar-basic component', () => {
	let component: SnackbarBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SnackbarBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SnackbarBasicComponent], (SnackbarBasicComponent) => {
		component = SnackbarBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});