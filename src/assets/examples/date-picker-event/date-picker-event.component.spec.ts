import { TestBed, inject } from '@angular/core/testing';

import { DatePickerEventComponent } from './date-picker-event.component';

describe('a date-picker-event component', () => {
	let component: DatePickerEventComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DatePickerEventComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DatePickerEventComponent], (DatePickerEventComponent) => {
		component = DatePickerEventComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});