import { TestBed, inject } from '@angular/core/testing';

import { ToolbarColorComponent } from './toolbar-color.component';

describe('a toolbar-color component', () => {
	let component: ToolbarColorComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ToolbarColorComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ToolbarColorComponent], (ToolbarColorComponent) => {
		component = ToolbarColorComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});