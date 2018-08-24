import { TestBed, inject } from '@angular/core/testing';

import { SearchBasicComponent } from './search-basic.component';

describe('a search-basic component', () => {
	let component: SearchBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SearchBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SearchBasicComponent], (SearchBasicComponent) => {
		component = SearchBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});