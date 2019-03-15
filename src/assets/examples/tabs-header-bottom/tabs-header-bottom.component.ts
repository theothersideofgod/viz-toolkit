import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs-header-bottom',
  templateUrl: 'tabs-header-bottom.component.html',
  styleUrls: ['tabs-header-bottom.component.scss']
})
export class TabsHeaderBottomComponent implements OnInit {
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
}

export const TabsHeaderBottomData = {
  name: 'TabsHeaderBottom'
};
