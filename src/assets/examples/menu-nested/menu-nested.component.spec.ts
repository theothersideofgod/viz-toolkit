import { TestBed, inject } from '@angular/core/testing';

import { MenuNestedComponent } from './menu-nested.component';

describe('a menu-nested component', () => {
	let component: MenuNestedComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MenuNestedComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MenuNestedComponent], (MenuNestedComponent) => {
		component = MenuNestedComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});