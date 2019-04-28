import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';

export interface Contract {
  type: string;
  priority: string;
}
@Component({
  selector: 'table-viz-multi-header',
  templateUrl: 'table-viz-multi-header.component.html',
  styleUrls: ['table-viz-multi-header.component.css']
})
export class TableVizMultiHeaderComponent implements OnInit {
  contracts = [
    {
      type: 'Admit Source',
      priority: 'failed'
    },
    {
      type: 'Discharge Date',
      priority: 'failed'
    },
    {
      type: 'Date of Birth',
      priority: 'failed'
    }
  ];

  sortedData;

  constructor() {
    this.sortedData = this.contracts.slice();
  }

  sortData(sort: Sort) {
    const data = this.contracts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'contract':
          return compare(a.type, b.type, isAsc);
        case 'priority':
          return compare(a.priority, b.type, isAsc);

        default:
          return 0;
      }
    });

    console.log(sort);
  }
  ngOnInit() {}
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
