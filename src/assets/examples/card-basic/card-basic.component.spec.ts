import { TestBed, inject } from '@angular/core/testing';

import { CardBasicComponent } from './card-basic.component';

describe('a card-basic component', () => {
	let component: CardBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CardBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CardBasicComponent], (CardBasicComponent) => {
		component = CardBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});