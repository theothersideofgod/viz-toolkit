import { TestBed, inject } from '@angular/core/testing';

import { VizSlideToggleComponent } from './viz-slide-toggle.component';

describe('a viz-slide-toggle component', () => {
	let component: VizSlideToggleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VizSlideToggleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VizSlideToggleComponent], (VizSlideToggleComponent) => {
		component = VizSlideToggleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});