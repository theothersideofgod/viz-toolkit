import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs-theme',
  templateUrl: 'tabs-theme.component.html',
  styleUrls: ['tabs-theme.component.css']
})
export class TabsThemeComponent implements OnInit {
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

export const TabsThemeData = {
  name: 'TabsTheme'
};
