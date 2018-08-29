import { TestBed, inject } from '@angular/core/testing';

import { LineChartBasicComponent } from './line-chart-basic.component';

describe('a line-chart-basic component', () => {
	let component: LineChartBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LineChartBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LineChartBasicComponent], (LineChartBasicComponent) => {
		component = LineChartBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});