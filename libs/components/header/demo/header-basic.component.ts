import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'header-basic',
	templateUrl: 'header-basic.component.html'
})

export class HeaderBasicComponent {
	
	userName = 'Paul'
	title = 'MDA Data Intake Portal';
	brandLink = '/dashboard';
	vizType = 'primary';

	rightBtnOnClick() {
		console.log('rightBtnOnClick')
	}

	hamburgerOnClick() {
		console.log('hamburgerOnClick')
	}
}