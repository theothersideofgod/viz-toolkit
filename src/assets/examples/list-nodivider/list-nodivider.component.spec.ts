import { TestBed, inject } from '@angular/core/testing';

import { ListNodividerComponent } from './list-nodivider.component';

describe('a list-nodivider component', () => {
	let component: ListNodividerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ListNodividerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ListNodividerComponent], (ListNodividerComponent) => {
		component = ListNodividerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});