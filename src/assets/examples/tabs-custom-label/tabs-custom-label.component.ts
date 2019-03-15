import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'tabs-custom-label',
  templateUrl: 'tabs-custom-label.component.html',
  styleUrls: ['tabs-custom-label.component.css'],
})
export class TabsCustomLabelComponent implements OnInit {
  navLinks = [
    {
      label: 'First',
      path: 'summary',
      width: '100px'
    },
    {
      label: 'Second',
      path: 'failed',
      width: '80px'
    },
    {
      label: 'Third',
      path: 'warning',
      width: '100px'
    }
  ];
  ngOnInit() { }
}

export const TabsCustomLabelData = {
	name: 'TabsCustomLabel'
}