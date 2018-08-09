import { TestBed, inject } from '@angular/core/testing';

import { PaginatorBasicComponent } from './paginator-basic.component';

describe('a paginator-basic component', () => {
	let component: PaginatorBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PaginatorBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PaginatorBasicComponent], (PaginatorBasicComponent) => {
		component = PaginatorBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});