import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'viz-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.scss']
})
export class CustomerSelectComponent implements OnInit {
  @Input()
  disabled: boolean;
  @Input()
  placeholder: string;
  @Input()
  value;
  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger;
  @Output()
  open = new EventEmitter();
  @Output()
  close = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  showMenu() {
    this.trigger.openMenu();
  }
  hideMenu() {
    this.trigger.closeMenu();
  }
}
