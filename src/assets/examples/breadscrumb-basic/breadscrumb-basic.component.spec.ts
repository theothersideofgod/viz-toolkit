import { TestBed, inject } from '@angular/core/testing';

import { BreadscrumbBasicComponent } from './breadscrumb-basic.component';

describe('a breadscrumb-basic component', () => {
	let component: BreadscrumbBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BreadscrumbBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([BreadscrumbBasicComponent], (BreadscrumbBasicComponent) => {
		component = BreadscrumbBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});