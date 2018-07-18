import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementDef } from '@angular/core/src/view';
import { VizMenuCellComponent } from './viz-menu-cell/viz-menu-cell.component';



interface MenuItem {
  name: string;
  children: Array<MenuItem>;
}

@Component({
  selector: 'viz-menu',
  templateUrl: './viz-menu.component.html',
  styleUrls: ['./viz-menu.component.scss']
})
export class VizMenuComponent implements OnInit {
  testList: number[] = [1,2,3,4,5,6,7]
  menuList: MenuItem = {
    name: '1',
    children: [
      {
        name: '2',
        children: [
          {
            name: '3',
            children: []
          }
        ]
      },
      {
        name: '4',
        children: [
          {
            name: '5',
            children: []
          },
          {
            name: '6',
            children: []
          }
        ]
      }
    ]
  };


  @ViewChild('test') test:ElementDef

  constructor() {}

  ngOnInit() {
    console.log(this.test)
  }

  flattenToTwoDimensionArray(obj, level){


    






  }

}
