import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'list-nodivider',
  templateUrl: 'list-nodivider.component.html',
  styleUrls: ['list-nodivider.component.css'],
})

export class ListNodividerComponent implements OnInit {
  messages:any[] = ['list item 1','list item 2','list item 3','list item 4']
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins'];
  ngOnInit() { }
  
  seachOnClick() {
    
  }
}

export const ListNodividerData = {
	name: 'ListNodivider'
}