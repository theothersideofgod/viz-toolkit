import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-basic',
  templateUrl: './list-basic.component.html',
  styleUrls: ['./list-basic.component.css']
})
export class ListBasicComponent implements OnInit {
  message
  constructor() { }

  ngOnInit() {
  }

}

export const ListBasicData = {
  name: 'List'
};