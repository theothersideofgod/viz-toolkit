import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'nodata-basic',
  templateUrl: 'nodata-basic.component.html',
  styleUrls: ['nodata-basic.component.css'],
})

export class NodataBasicComponent implements OnInit {
  ngOnInit() { }
}

export const NodataBasicData = {
	name: 'NodataBasic'
}