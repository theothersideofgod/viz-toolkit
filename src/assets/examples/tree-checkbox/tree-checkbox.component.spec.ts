import { TestBed, inject } from '@angular/core/testing';

import { TreeCheckboxComponent } from './tree-checkbox.component';

describe('a tree-checkbox component', () => {
	let component: TreeCheckboxComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TreeCheckboxComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TreeCheckboxComponent], (TreeCheckboxComponent) => {
		component = TreeCheckboxComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});