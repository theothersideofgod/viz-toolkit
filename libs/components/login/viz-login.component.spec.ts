import { TestBed, inject } from '@angular/core/testing';

import { VizLoginComponent } from './viz-login.component';

describe('a viz-login component', () => {
	let component: VizLoginComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VizLoginComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VizLoginComponent], (VizLoginComponent) => {
		component = VizLoginComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});