import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-component-sidenav',
  templateUrl: './component-sidenav.html',
  styleUrls: ['./component-sidenav.scss']
})
export class ComponentSidenavComponent implements OnInit {
  navList = [];

  constructor(
    private _router: Router
  ) { 
    console.log(_router.url)
  }

  ngOnInit() {

  }

}

const initNavList = [
  {
    name: 'Getting started',
    subs: [
      {
        name: 'Designers',
        value: 'designers'
      },
      {
        name: 'Developers',
        value: 'developers'
      }
    ]
  }
]
