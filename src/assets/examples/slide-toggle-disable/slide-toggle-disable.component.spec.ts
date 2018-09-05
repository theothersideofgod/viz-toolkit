import { TestBed, inject } from '@angular/core/testing';

import { SlideToggleDisableComponent } from './slide-toggle-disable.component';

describe('a slide-toggle-disable component', () => {
	let component: SlideToggleDisableComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SlideToggleDisableComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SlideToggleDisableComponent], (SlideToggleDisableComponent) => {
		component = SlideToggleDisableComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});