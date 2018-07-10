import { TestBed, inject } from '@angular/core/testing';

import { VizHeaderComponent } from './viz-header.component';

describe('a viz-header component', () => {
	let component: VizHeaderComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VizHeaderComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VizHeaderComponent], (VizHeaderComponent) => {
		component = VizHeaderComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});