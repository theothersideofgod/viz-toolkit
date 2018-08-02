import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs-narrow',
  templateUrl: 'tabs-narrow.component.html',
  styleUrls: ['tabs-narrow.component.css']
})
export class TabsNarrowComponent implements OnInit {
  navLinks = [
    {
      label: 'ALL MEMBERS',
      path: 'summary',
      width: '100px'
    },
    {
      label: 'GROUP',
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
