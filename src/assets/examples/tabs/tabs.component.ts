import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss']
})
export class TabsComponent implements OnInit {
  navLinks = [
    {
      label: 'SUMMARY',
      path: 'summary',
      width: '100px'
    },
    {
      label: 'FAILED',
      path: 'failed',
      width: '80px'
    },
    {
      label: 'WARNING',
      path: 'warning',
      width: '100px'
    },
    {
      label: 'PASSED',
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
