import { TestBed, inject } from '@angular/core/testing';

import { SidenavBasicComponent } from './sidenav-basic.component';

describe('a sidenav-basic component', () => {
	let component: SidenavBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SidenavBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SidenavBasicComponent], (SidenavBasicComponent) => {
		component = SidenavBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});