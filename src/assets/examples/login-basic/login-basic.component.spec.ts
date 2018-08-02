import { TestBed, inject } from '@angular/core/testing';

import { LoginBasicComponent } from './login-basic.component';

describe('a login-basic component', () => {
	let component: LoginBasicComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LoginBasicComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LoginBasicComponent], (LoginBasicComponent) => {
		component = LoginBasicComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});