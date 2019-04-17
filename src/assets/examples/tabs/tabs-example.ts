import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'tabs',
  templateUrl: 'tabs-example.html',
  styleUrls: ['tabs-example.css'],
})
export class TabsExample implements OnInit {
  ngOnInit() { }
}

export const TabsData = {
	name: 'Tabs'
}