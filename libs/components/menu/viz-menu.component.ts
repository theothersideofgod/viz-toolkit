import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ElementDef } from '@angular/core/src/view';

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
  
  @Input() menuList: MenuItem;

  @ViewChild('test') test;

  constructor() {}

  ngOnInit() {
    console.log(this.test);
  }

  flattenToTwoDimensionArray(obj, level) {}
}
