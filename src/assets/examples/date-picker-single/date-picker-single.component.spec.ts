import { TestBed, inject } from '@angular/core/testing';

import { DatePickerSingleComponent } from './date-picker-single.component';

describe('a date-picker-single component', () => {
	let component: DatePickerSingleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DatePickerSingleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DatePickerSingleComponent], (DatePickerSingleComponent) => {
		component = DatePickerSingleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});