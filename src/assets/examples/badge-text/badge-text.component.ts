import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'badge-text',
  templateUrl: 'badge-text.component.html',
  styleUrls: ['badge-text.component.css'],
})
export class BadgeTextComponent implements OnInit {
  ngOnInit() { }
}

export const BadgeTextData = {
	name: 'BadgeText'
}