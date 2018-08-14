import { TestBed, inject } from '@angular/core/testing';

import { NodataBasicComponent } from './nodata-basic.component';

describe('a nodata-basic component', () => {
	let component: NodataBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NodataBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NodataBasicComponent], (NodataBasicComponent) => {
		component = NodataBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});