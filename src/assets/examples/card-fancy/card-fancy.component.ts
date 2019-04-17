import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'card-fancy',
  templateUrl: 'card-fancy.component.html',
  styleUrls: ['card-fancy.component.css'],
})
export class CardFancyComponent implements OnInit {
  ngOnInit() { }
}

export const CardFancyData = {
	name: 'CardFancy'
}