import { TestBed, inject } from '@angular/core/testing';

import { SlideToggleBasicComponent } from './slide-toggle-basic.component';

describe('a slide-toggle-basic component', () => {
	let component: SlideToggleBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SlideToggleBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SlideToggleBasicComponent], (SlideToggleBasicComponent) => {
		component = SlideToggleBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});