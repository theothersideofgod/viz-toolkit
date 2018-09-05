import { TestBed, inject } from '@angular/core/testing';

import { BadgeTabsComponent } from './badge-tabs.component';

describe('a badge-tabs component', () => {
	let component: BadgeTabsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BadgeTabsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([BadgeTabsComponent], (BadgeTabsComponent) => {
		component = BadgeTabsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});