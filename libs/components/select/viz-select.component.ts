import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

export interface DateType {
  id: string;
  title: string;
}

@Component({
  selector: 'viz-select',
  templateUrl: './viz-select.component.html',
  styleUrls: ['./viz-select.component.scss']
})
export class VizSelectComponent implements OnInit {
  @Input()disabled: boolean;
  @Input()placeholder: string;
  @Input()options: Array<DateType> = [];
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Output() select = new EventEmitter<DateType>();
  value = '';
  menuShown = false;
  selected: DateType;

  constructor() {}

  ngOnInit() {
    this.selected = this.options[0];
  }
  showMenu() {
    this.menuShown = true;
  }
  hideMenu() {
    this.menuShown = false;
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
