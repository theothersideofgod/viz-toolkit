import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
@Component({
  selector: 'paginator-configurable',
  templateUrl: 'paginator-configurable.component.html',
  styleUrls: ['paginator-configurable.component.css']
})
export class PaginatorConfigurableComponent implements OnInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  ngOnInit() {}
}

export const PaginatorConfigurableData = {
  name: 'PaginatorConfigurable'
};
