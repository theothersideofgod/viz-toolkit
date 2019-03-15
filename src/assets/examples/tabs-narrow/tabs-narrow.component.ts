import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs-narrow',
  templateUrl: 'tabs-narrow.component.html',
  styleUrls: ['tabs-narrow.component.scss']
})
export class TabsNarrowComponent implements OnInit {
  navLinks = [
    {
      label: 'All Members',
      path: 'summary',
      width: '100px'
    },
    {
      label: 'Groups',
      path: 'failed',
      width: '80px'
    }
  ];
  ngOnInit() {}

  seachOnClick() {}
}

export const TabsNarrowData = {
  name: 'TabsNarrow'
};
