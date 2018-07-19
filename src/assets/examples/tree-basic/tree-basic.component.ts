import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-basic',
  templateUrl: './tree-basic.component.html',
  styleUrls: ['./tree-basic.component.css']
})
export class TreeBasicComponent implements OnInit {
  tree: any = [
    {
      name: 1,
      children: [
        {
          name: 2,
          children: [
            {
              name: 3,
              children: []
            },
            {
              name: 4,
              children: []
            }
          ]
        },
        {
          name: 22,
          children: [
            {
              name: 33,
              children: []
            },
            {
              name: 44,
              children: []
            }
          ]
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}

export const TreeBasicData = {
  name: 'Tree'
};
