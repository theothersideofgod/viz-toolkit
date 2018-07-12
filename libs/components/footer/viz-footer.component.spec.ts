import { TestBed, inject } from '@angular/core/testing';

import { VizFooterComponent } from './viz-footer.component';

describe('a viz-footer component', () => {
	let component: VizFooterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VizFooterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VizFooterComponent], (VizFooterComponent) => {
		component = VizFooterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});