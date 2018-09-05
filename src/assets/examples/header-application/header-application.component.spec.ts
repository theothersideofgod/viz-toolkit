import { TestBed, inject } from '@angular/core/testing';

import { HeaderApplicationComponent } from './header-application.component';

describe('a header-application component', () => {
	let component: HeaderApplicationComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				HeaderApplicationComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HeaderApplicationComponent], (HeaderApplicationComponent) => {
		component = HeaderApplicationComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});