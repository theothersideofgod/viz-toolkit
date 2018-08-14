import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav-basic',
  templateUrl: 'sidenav-basic.component.html',
  styleUrls: ['sidenav-basic.component.css']
})
export class SidenavBasicComponent implements OnInit {
  navList = [
    {
      name: 'Getting started',
      subs: [
        {
          name: 'Designers',
          value: '/documentation/designers'
        },
        {
          name: 'Developers',
          value: '/documentation/developers'
        }
      ]
    },
    {
      name: 'Form Controls',
      subs: [
        {
          name: 'Sidenav',
          value: '/documentation/sidenav'
        },
        {
          name: 'Checkbox',
          value: '/documentation/checkbox'
        },
        {
          name: 'Datepicker',
          value: '/documentation/datepicker'
        },
        {
          name: 'Form Field',
          value: '/documentation/formfield'
        },
        {
          name: 'Radio Buttons',
          value: '/documentation/radio'
        },
        {
          name: 'Select',
          value: '/documentation/select'
        },
        {
          name: 'Slider',
          value: '/documentation/slider'
        },
        {
          name: 'Slide Toggle',
          value: '/documentation/slidetoggle'
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
