import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav-basic',
  templateUrl: 'sidenav-basic.component.html',
  styleUrls: ['sidenav-basic.component.css']
})
export class SidenavBasicComponent implements OnInit {
  navList = [
    {
      name: 'my orders',
      subs: [
        {
          name: 'Assigned',
          value: '/documentation/designers',
          icon: 'assignment_turned_in'
        },
        {
          name: 'Held Back',
          value: '/documentation/developers',
          icon: 'inbox'
        },
        {
          name: 'Confirmed',
          value: '/documentation/developers',
          icon: 'confirmation_number'
        }
      ]
    },
    {
      name: 'held back',
      subs: [
        {
          name: 'All',
          value: '/documentation/designers',
          icon: 'folder'
        },
        {
          name: 'PO Nodtes',
          value: '/documentation/developers',
          icon: 'payment'
        }
      ]
    }
  ];
  constructor() {}
  ngOnInit() {}
}

export const SidenavBasicData = {
  name: 'SidenavBasic'
};
