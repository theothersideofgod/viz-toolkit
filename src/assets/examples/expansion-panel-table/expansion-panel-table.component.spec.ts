import { TestBed, inject } from '@angular/core/testing';

import { ExpansionPanelTableComponent } from './expansion-panel-table.component';

describe('a expansion-panel-table component', () => {
	let component: ExpansionPanelTableComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ExpansionPanelTableComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ExpansionPanelTableComponent], (ExpansionPanelTableComponent) => {
		component = ExpansionPanelTableComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});