import { TestBed, inject } from '@angular/core/testing';

import { VizToolbarComponent } from './viz-toolbar.component';

describe('a viz-toolbar component', () => {
	let component: VizToolbarComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VizToolbarComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VizToolbarComponent], (VizToolbarComponent) => {
		component = VizToolbarComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});