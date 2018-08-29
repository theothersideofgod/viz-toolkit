import { TestBed, inject } from '@angular/core/testing';

import { BarChartBasicComponent } from './bar-chart-basic.component';

describe('a bar-chart-basic component', () => {
	let component: BarChartBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				BarChartBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([BarChartBasicComponent], (BarChartBasicComponent) => {
		component = BarChartBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});