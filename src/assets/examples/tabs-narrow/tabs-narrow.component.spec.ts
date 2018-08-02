import { TestBed, inject } from '@angular/core/testing';

import { TabsNarrowComponent } from './tabs-narrow.component';

describe('a tabs-narrow component', () => {
	let component: TabsNarrowComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TabsNarrowComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TabsNarrowComponent], (TabsNarrowComponent) => {
		component = TabsNarrowComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});