import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface DateType {
  id: string;
  title: string;
}

@Component({
  selector: 'viz-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.scss']
})
export class CustomerSelectComponent implements OnInit {
  @Input()disabled: boolean;
  @Input()placeholder: string;
  @Input()options: Array<DateType> = [];
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Output() select = new EventEmitter<DateType>();
  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();
  @Input() value;
  selected: DateType;

  constructor() {}

  ngOnInit() {
    this.selected = this.options[0];
  }
  showMenu() {
    this.trigger.openMenu();
    this.open.emit();
  }
  hideMenu() {
    this.trigger.closeMenu();
    this.close.emit();
  }
  selectOption(option) {
    this.selected = option;
    this.select.emit(option);
    this.trigger.closeMenu();
  }
  message() {
    return this.selected.title;
  }



}
