import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'divider',
  templateUrl: 'divider.component.html',
  styleUrls: ['divider.component.scss'],
})
export class DividerComponent implements OnInit {
  ngOnInit() { }
}

export const DividerData = {
	name: 'Divider'
}