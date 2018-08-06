import { TestBed, inject } from '@angular/core/testing';

import { PrinciplesComponent } from './principles.component';

describe('a principles component', () => {
	let component: PrinciplesComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PrinciplesComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PrinciplesComponent], (PrinciplesComponent) => {
		component = PrinciplesComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});