import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
	selector: 'viz-login',
  templateUrl: 'viz-login.component.html',
  styleUrls: ['viz-login.component.scss']
})

export class VizLoginComponent implements OnInit {

  @Input() forgetPasswordLink: String = "";
  @Output() loginOnClick = new EventEmitter();

  ngOnInit() { }
  
  onLogin() {
    this.loginOnClick.emit()
  }
}