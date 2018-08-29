import { TestBed, inject } from '@angular/core/testing';

import { DotPlotChartBasicComponent } from './dot-plot-chart-basic.component';

describe('a dot-plot-chart-basic component', () => {
	let component: DotPlotChartBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DotPlotChartBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DotPlotChartBasicComponent], (DotPlotChartBasicComponent) => {
		component = DotPlotChartBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});