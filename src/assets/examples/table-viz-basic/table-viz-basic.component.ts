import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';

export interface Contract {
  name: string;
  type: string;
}
@Component({
  selector: 'table-viz-basic',
  templateUrl: 'table-viz-basic.component.html',
  styleUrls: ['table-viz-basic.component.css']
})
export class TableVizBasicComponent implements OnInit {
  contracts = [
    {
      name: 'Zipper Hips & Knees',
      type: 'Marketing'
    },
    {
      name: 'Howmedica Osteonics (Stryker) Hips & Knees',
      type: 'Marketing'
    },
    {
      name: 'Johnson & Johnson (Dupuy Synthes)',
      type: 'Marketing'
    },
    {
      name: 'Johnson & Johnson',
      type: 'Marketing'
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
          return compare(a.name, b.name, isAsc);
        case 'type':
          return compare(a.type, b.type, isAsc);

        default:
          return 0;
      }
    });

    console.log(sort);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
