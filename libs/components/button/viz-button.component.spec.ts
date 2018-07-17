import { TestBed, inject } from '@angular/core/testing';

import { VizButtonComponent } from './viz-button.component';

describe('a viz-button component', () => {
	let component: VizButtonComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VizButtonComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VizButtonComponent], (VizButtonComponent) => {
		component = VizButtonComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});