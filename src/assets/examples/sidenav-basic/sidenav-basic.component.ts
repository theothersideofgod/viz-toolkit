import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Sub {
  name: string;
  value: string;
  icon: string;
  removable: false;
  isActive: false;
}
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
          value: '/documentation/menu',
          icon: 'assignment_turned_in',
          removable: false,
          isActive: false
        },
        {
          name: 'Held Back',
          value: '/documentation/slider',
          icon: 'inbox',
          removable: false,
          isActive: false
        },
        {
          name: 'Confirmed',
          value: '/documentation/select',
          icon: 'confirmation_number',
          removable: false,
          isActive: false
        }
      ]
    },
    {
      name: 'open orders',
      subs: [
        {
          name: '84738273',
          value: '/documentation/colors',
          icon: 'warning',
          removable: true,
          isActive: false
        },
        {
          name: '23497234',
          value: '/documentation/developers',
          icon: 'warning',
          removable: true,
          isActive: false
        },
        {
          name: 'AH-398377',
          value: '/documentation/sidenav',
          icon: 'warning',
          removable: true,
          isActive: false
        }
      ]
    }
  ];
  lastSubItem: Sub;
  constructor(private router: Router) {}
  ngOnInit() {}
  removeItem(navIndex, targetSub) {
    const targetNav = this.navList[navIndex];

    this.navList[navIndex].subs = targetNav.subs.filter(sub => {
      return sub.name !== targetSub.name;
    });
  }
  redirectTo(subNav) {
    if (this.lastSubItem) {
      this.lastSubItem.isActive = false;
    }
    subNav.isActive = true;
    this.lastSubItem = subNav;
    // this.router.navigate([subNav.value]);
  }
}

export const SidenavBasicData = {
  name: 'SidenavBasic'
};
