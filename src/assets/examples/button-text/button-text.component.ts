import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'button-text',
  templateUrl: 'button-text.component.html',
  styleUrls: ['button-text.component.css'],
})

export class ButtonTextComponent implements OnInit {
  ngOnInit() { }
}

export const ButtonTextData = {
	name: 'ButtonText'
}