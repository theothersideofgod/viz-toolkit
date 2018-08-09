import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'tooltip-basic',
  templateUrl: 'tooltip-basic.component.html',
  styleUrls: ['tooltip-basic.component.css'],
})

export class TooltipBasicComponent implements OnInit {
  ngOnInit() { }
}

export const TooltipBasicData = {
	name: 'TooltipBasic'
}