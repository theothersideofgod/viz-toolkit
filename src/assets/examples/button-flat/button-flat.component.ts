import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'button-flat',
  templateUrl: 'button-flat.component.html',
  styleUrls: ['button-flat.component.css'],
})
export class ButtonFlatComponent implements OnInit {
  ngOnInit() { }
}

export const ButtonFlatData = {
	name: 'ButtonFlat'
}