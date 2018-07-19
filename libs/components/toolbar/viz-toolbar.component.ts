import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'viz-toolbar',
  templateUrl: 'viz-toolbar.component.html',
  styleUrls: ['viz-toolbar.component.scss'],
})

export class VizToolbarComponent implements OnInit {

  @Input() title: String;
  @Output() searchBtnClick = new EventEmitter()

  ngOnInit() { }
  
  searchOnclick() {
    this.searchBtnClick.emit()
  }
}