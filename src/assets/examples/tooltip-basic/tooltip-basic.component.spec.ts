import { TestBed, inject } from '@angular/core/testing';

import { TooltipBasicComponent } from './tooltip-basic.component';

describe('a tooltip-basic component', () => {
	let component: TooltipBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TooltipBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TooltipBasicComponent], (TooltipBasicComponent) => {
		component = TooltipBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});