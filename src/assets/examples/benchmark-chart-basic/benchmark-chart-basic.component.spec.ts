import { TestBed, inject } from '@angular/core/testing';

import { BenchmarkChartBasicComponent } from './benchmark-chart-basic.component';

describe('a benchmark-chart-basic component', () => {
	let component: BenchmarkChartBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BenchmarkChartBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([BenchmarkChartBasicComponent], (BenchmarkChartBasicComponent) => {
		component = BenchmarkChartBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});