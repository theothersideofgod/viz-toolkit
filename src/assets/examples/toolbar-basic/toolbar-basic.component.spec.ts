import { TestBed, inject } from '@angular/core/testing';

import { ToolbarBasicComponent } from './toolbar-basic.component';

describe('a toolbar-basic component', () => {
	let component: ToolbarBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ToolbarBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ToolbarBasicComponent], (ToolbarBasicComponent) => {
		component = ToolbarBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});