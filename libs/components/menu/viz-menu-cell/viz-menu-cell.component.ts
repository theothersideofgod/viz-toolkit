import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'viz-menu-cell',
  templateUrl: './viz-menu-cell.component.html',
  styleUrls: ['./viz-menu-cell.component.scss']
})
export class VizMenuCellComponent implements OnInit {

  @Input() list


  constructor() { }

  ngOnInit() {
  }

  testfunction() {
    console.log('waefawfjo')
  }

}
