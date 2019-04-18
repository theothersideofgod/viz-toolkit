import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'badge-button',
  templateUrl: 'badge-button.component.html',
  styleUrls: ['badge-button.component.css'],
})
export class BadgeButtonComponent implements OnInit {
  ngOnInit() { }
}

export const BadgeButtonData = {
	name: 'BadgeButton'
}