import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'viz-login-okta',
  templateUrl: './viz-login-okta.component.html',
  styleUrls: ['./viz-login-okta.component.scss']
})
export class VizLoginOktaComponent implements OnInit {
  @Input() thumbnail;
  @Output() loginOnClick = new EventEmitter();
  @Output() forgetPasswordLink = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
