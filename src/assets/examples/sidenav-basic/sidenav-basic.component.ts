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
          value: '/documentation/menu',
          icon: 'assignment_turned_in',
          removable: false
        },
        {
          name: 'Held Back',
          value: '/documentation/slider',
          icon: 'inbox',
          removable: false
        },
        {
          name: 'Confirmed',
          value: '/documentation/select',
          icon: 'confirmation_number',
          removable: false
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
          removable: true
        },
        {
          name: '23497234',
          value: '/documentation/developers',
          icon: 'warning',
          removable: true
        },
        {
          name: 'AH-398377',
          value: '/documentation/sidenav',
          icon: 'warning',
          removable: true
        }
      ]
    }
  ];
  constructor() {}
  ngOnInit() {}
  removeItem(navIndex, targetSub) {
    let targetNav = this.navList[navIndex]

    this.navList[navIndex].subs = targetNav.subs.filter(sub=>{
      return sub.name !== targetSub.name
    })

  }
}

export const SidenavBasicData = {
  name: 'SidenavBasic'
};
