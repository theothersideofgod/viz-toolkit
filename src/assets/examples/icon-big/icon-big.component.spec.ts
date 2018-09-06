import { TestBed, inject } from '@angular/core/testing';

import { IconBigComponent } from './icon-big.component';

describe('a icon-big component', () => {
	let component: IconBigComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				IconBigComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([IconBigComponent], (IconBigComponent) => {
		component = IconBigComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});