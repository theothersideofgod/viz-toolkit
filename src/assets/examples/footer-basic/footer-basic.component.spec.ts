import { TestBed, inject } from '@angular/core/testing';

import { FooterBasicComponent } from './footer-basic.component';

describe('a footer-basic component', () => {
	let component: FooterBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FooterBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FooterBasicComponent], (FooterBasicComponent) => {
		component = FooterBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});