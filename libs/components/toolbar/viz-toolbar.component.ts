import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'viz-toolbar',
  templateUrl: 'viz-toolbar.component.html',
  styleUrls: ['viz-toolbar.component.scss'],
})

export class VizToolbarComponent implements OnInit {

  @Input() placeholderText: String;
  @Output() searchBtnClick = new EventEmitter();
  value: String = ""

  ngOnInit() { }
  
  searchOnclick() {
    this.searchBtnClick.emit(this.value)
  }
}