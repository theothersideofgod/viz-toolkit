import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs-theme',
  templateUrl: 'tabs-theme.component.html',
  styleUrls: ['tabs-theme.component.css']
})
export class TabsThemeComponent implements OnInit {
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

export const TabsThemeData = {
  name: 'TabsTheme'
};
