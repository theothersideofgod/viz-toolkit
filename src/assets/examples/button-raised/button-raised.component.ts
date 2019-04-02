import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'button-raised',
  templateUrl: 'button-raised.component.html',
  styleUrls: ['button-raised.component.css'],
})
export class ButtonRaisedComponent implements OnInit {
  ngOnInit() { }
}

export const ButtonRaisedData = {
	name: 'ButtonRaised'
}