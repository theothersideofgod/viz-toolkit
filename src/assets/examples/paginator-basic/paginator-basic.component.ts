import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'paginator-basic',
  templateUrl: 'paginator-basic.component.html',
  styleUrls: ['paginator-basic.component.scss'],
})

export class PaginatorBasicComponent implements OnInit {
  ngOnInit() { }
}

export const PaginatorBasicData = {
	name: 'PaginatorBasic'
}