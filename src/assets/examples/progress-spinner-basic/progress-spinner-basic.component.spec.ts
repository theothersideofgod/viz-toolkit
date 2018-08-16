import { TestBed, inject } from '@angular/core/testing';

import { ProgressSpinnerBasicComponent } from './progress-spinner-basic.component';

describe('a progress-spinner-basic component', () => {
	let component: ProgressSpinnerBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProgressSpinnerBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProgressSpinnerBasicComponent], (ProgressSpinnerBasicComponent) => {
		component = ProgressSpinnerBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});