import { TestBed, inject } from '@angular/core/testing';

import { HeaderFooterBasicComponent } from './header-footer-basic.component';

describe('a header-footer-basic component', () => {
	let component: HeaderFooterBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				HeaderFooterBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HeaderFooterBasicComponent], (HeaderFooterBasicComponent) => {
		component = HeaderFooterBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});