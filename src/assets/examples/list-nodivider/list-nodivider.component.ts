import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'list-nodivider',
  templateUrl: 'list-nodivider.component.html',
  styleUrls: ['list-nodivider.component.css'],
})

export class ListNodividerComponent implements OnInit {
  messages:any[] = ['list1','list2','list3','list4']
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins'];
  ngOnInit() { }
  
  seachOnClick() {
    
  }
}

export const ListNodividerData = {
	name: 'ListNodivider'
}