import { TestBed, inject } from '@angular/core/testing';

import { TableBasicComponent } from './table-basic.component';

describe('a table-basic component', () => {
	let component: TableBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TableBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TableBasicComponent], (TableBasicComponent) => {
		component = TableBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});