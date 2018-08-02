import { TestBed, inject } from '@angular/core/testing';

import { DialogBasicComponent } from './dialog-basic.component';

describe('a dialog-basic component', () => {
	let component: DialogBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DialogBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DialogBasicComponent], (DialogBasicComponent) => {
		component = DialogBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});