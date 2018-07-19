import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'viz-tree-cell',
  templateUrl: './viz-tree-cell.component.html',
  styleUrls: ['./viz-tree-cell.component.scss']
})
export class VizTreeCellComponent implements OnInit {
  @Input() node;
  collapse: boolean = true;
  constructor() {}

  ngOnInit() {}

  toggleCollapse() {
    this.collapse = !this.collapse;
  }
}
