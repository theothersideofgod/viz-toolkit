import { TestBed, inject } from '@angular/core/testing';

import { TableNativeComponent } from './table-native.component';

describe('a table-native component', () => {
	let component: TableNativeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TableNativeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TableNativeComponent], (TableNativeComponent) => {
		component = TableNativeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});