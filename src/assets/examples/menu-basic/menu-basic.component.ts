import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-basic',
  templateUrl: './menu-basic.component.html',
  styleUrls: ['./menu-basic.component.css']
})
export class MenuBasicComponent implements OnInit {
  menuList: any = {
    name: '1',
    children: [
      {
        name: '2',
        children: [
          {
            name: '3',
            children: [
              {
                name: '7',
                children: [
                  {
                    name: '8',
                    children: []
                  }
                ]
              },
              {
                name: '77',
                children: [
                  {
                    name: '88',
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: '4',
        children: [
          {
            name: '5',
            children: [
              {
                name: '111',
                children: [
                  {
                    name: '222',
                    children: [
                      {
                        name: '333',
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                name: '1111',
                children: [
                  {
                    name: '2222',
                    children: [
                      {
                        name: '3333',
                        children: []
                      },
                      {
                        name: '4444',
                        children: []
                      },
                      {
                        name: '5555',
                        children: []
                      },
                      {
                        name: '6666',
                        children: []
                      },
                      {
                        name: '7777',
                        children: []
                      },
                      {
                        name: '8888',
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            name: '6',
            children: []
          }
        ]
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}

export const MenuBasicData = {
  name: 'Menu'
};
