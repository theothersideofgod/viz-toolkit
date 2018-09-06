import { TestBed, inject } from '@angular/core/testing';

import { IconSmallComponent } from './icon-small.component';

describe('a icon-small component', () => {
	let component: IconSmallComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				IconSmallComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([IconSmallComponent], (IconSmallComponent) => {
		component = IconSmallComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});