import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'button-disable',
  templateUrl: 'button-disable.component.html',
  styleUrls: ['button-disable.component.css'],
})

export class ButtonDisableComponent implements OnInit {
  ngOnInit() { }
}

export const ButtonDisableData = {
	name: 'ButtonDisable'
}