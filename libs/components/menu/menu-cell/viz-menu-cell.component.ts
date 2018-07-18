import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'viz-menu-cell',
  templateUrl: './viz-menu-cell.component.html',
  styleUrls: ['./viz-menu-cell.component.scss']
})
export class VizMenuCellComponent implements OnInit {
  @Input() list;
  @ViewChild('childMenu') public childMenu: ElementRef;

  constructor() {}

  ngOnInit() {}

  testfunction() {
    console.log('waefawfjo');
  }
}
