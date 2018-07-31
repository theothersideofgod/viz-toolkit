import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-basic',
  templateUrl: './list-basic.component.html',
  styleUrls: ['./list-basic.component.css']
})
export class ListBasicComponent implements OnInit {
  messages:any[] = ['list1','list2','list3','list4']
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins'];
  constructor() { }

  ngOnInit() {
  }

}

export const ListBasicData = {
  name: 'List'
};