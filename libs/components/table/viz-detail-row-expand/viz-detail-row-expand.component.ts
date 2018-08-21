import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: '[viz-detail-row-expand]',
  templateUrl: './viz-detail-row-expand.component.html',
  styleUrls: ['./viz-detail-row-expand.component.scss'],
  animations: [
    trigger('expandState', [
      state('expand', style({
        transform: 'rotate(-180deg)'
      })),
      state('collapse',   style({
        transform: 'rotate(0deg)'
      })),
      transition('expand => collapse', animate('300ms ease')),
      transition('collapse => expand', animate('300ms ease'))
    ])
  ]
})
export class VizDetailRowExpandComponent implements OnInit {
  isExpanded: boolean = false;
  expandState: string = 'collapse'
  @Output() toggleExpandRow: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() {}

  ngOnInit() {}
  toggleExpand() {
    this.isExpanded = !this.isExpanded
    this.expandState = this.isExpanded ? "expand" : "collapse"
    this.toggleExpandRow.emit(this.isExpanded)
  }
}
