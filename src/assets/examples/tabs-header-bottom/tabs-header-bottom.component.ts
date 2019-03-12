import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs-header-bottom',
  templateUrl: 'tabs-header-bottom.component.html',
  styleUrls: ['tabs-header-bottom.component.scss']
})
export class TabsHeaderBottomComponent implements OnInit {
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
}

export const TabsHeaderBottomData = {
  name: 'TabsHeaderBottom'
};
