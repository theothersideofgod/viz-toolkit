import { TestBed, inject } from '@angular/core/testing';

import { ComparativeChartBasicComponent } from './comparative-chart-basic.component';

describe('a comparative-chart-basic component', () => {
	let component: ComparativeChartBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ComparativeChartBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ComparativeChartBasicComponent], (ComparativeChartBasicComponent) => {
		component = ComparativeChartBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});