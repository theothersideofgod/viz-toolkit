import { TestBed, inject } from '@angular/core/testing';

import { BadgeIconComponent } from './badge-icon.component';

describe('a badge-icon component', () => {
	let component: BadgeIconComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BadgeIconComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([BadgeIconComponent], (BadgeIconComponent) => {
		component = BadgeIconComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});