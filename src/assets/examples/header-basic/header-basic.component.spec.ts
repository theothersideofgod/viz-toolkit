import { TestBed, inject } from '@angular/core/testing';

import { HeaderBasicComponent } from './header-basic.component';

describe('a header-basic component', () => {
	let component: HeaderBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				HeaderBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HeaderBasicComponent], (HeaderBasicComponent) => {
		component = HeaderBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});