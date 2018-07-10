import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'header-basic',
	templateUrl: 'header-basic.component.html'
})

export class HeaderBasicComponent {
	
	userName = 'Paul'
	title = 'MDA Data Intake Portal';
	brandLink = '/dashboard';
	svgIcon = 'assets/img/vizient-logo.svg';
	vizType = 'primary';

	rightBtnOnClick() {
		console.log('rightBtnOnClick')
	}

	hamburgerOnClick() {
		console.log('hamburgerOnClick')
	}
}