import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss']
})
export class TabsComponent implements OnInit {
  navLinks = [
    {
      label: 'Summary',
      path: 'summary',
      width: '100px'
    },
    {
      label: 'Failed',
      path: 'failed',
      width: '80px'
    },
    {
      label: 'Warning',
      path: 'warning',
      width: '100px'
    },
    {
      label: 'Passed',
      path: 'passed',
      width: '80px'
    }
  ];
  ngOnInit() {}

  seachOnClick() {}
}

export const TabsData = {
  name: 'Tabs'
};
