import { TestBed, inject } from '@angular/core/testing';

import { ProgressBarChartBasicComponent } from './progress-bar-chart-basic.component';

describe('a progress-bar-chart-basic component', () => {
	let component: ProgressBarChartBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProgressBarChartBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProgressBarChartBasicComponent], (ProgressBarChartBasicComponent) => {
		component = ProgressBarChartBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});