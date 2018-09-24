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
  selector: '[vizShowExpand]',
  templateUrl: './viz-show-expand.component.html',
  styleUrls: ['./viz-show-expand.component.scss'],
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
export class VizShowExpandComponent implements OnInit {
  isExpanded = false;
  expandState = 'collapse';
  @Output() toggleExpandRow: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    this.expandState = this.isExpanded ? 'expand' : 'collapse';
    this.toggleExpandRow.emit(this.isExpanded);
  }

}
