import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'card-basic',
  templateUrl: 'card-basic.component.html',
  styleUrls: ['card-basic.component.css'],
})

export class CardBasicComponent implements OnInit {
  ngOnInit() { }
}

export const CardBasicData = {
	name: 'CardBasic'
}