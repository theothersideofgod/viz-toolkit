import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-basic',
  templateUrl: './list-basic.component.html',
  styleUrls: ['./list-basic.component.css']
})
export class ListBasicComponent implements OnInit {
  messages: any[] = ['list item 1', 'list item 2', 'list item 3', 'list item 4'];
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins'];
  constructor() { }

  ngOnInit() {
  }

}

export const ListBasicData = {
  name: 'List'
};
