import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

const statusMapping = {
  400: 'Password expired',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  422: 'Unprocessable entity',
  500: 'Internal server error',
  501: 'Not implemented',
  502: 'Bad gateway',
  503: 'Service unavailable'
};

@Component({
  selector: 'viz-http-status',
  templateUrl: './viz-http-status.component.html',
  styleUrls: ['./viz-http-status.component.scss']
})
export class VizHttpStatusComponent implements OnInit {
  @Input('code')
  code;
  constructor(private _location: Location) {}

  ngOnInit() {}

  getDescription() {
    return statusMapping[this.code];
  }

  goBack() {
    this._location.back();
  }
}
