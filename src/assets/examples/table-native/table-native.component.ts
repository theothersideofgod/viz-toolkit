import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material';
import { MatSort, MatTableDataSource } from '@angular/material';
export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

/**
 * @title Sorting overview
 */
@Component({
  selector: 'table-native.component',
  templateUrl: 'table-native.component.html',
  styleUrls: ['table-native.component.css']
})
export class TableNativeComponent {
  desserts = [
    {
      contract: 'Zipper Hips & Knees',
      type: 'Marketing',
      subs: [
        {
          file: 'zipper-hips_knees(1).txt'
        },
        {
          file: 'zipper-hips_knees(2).txt'
        },
        {
          file: 'zipper-hips_knees(3).txt'
        }
      ]
    },
    {
      contract: 'Howmedica Ostenonics (stryker) Hips & Knees',
      type: 'Marketing',
      subs: [
        {
          file: 'howmediaca-ostenonics_knees(1).txt'
        },
        {
          file: 'howmediaca-ostenonics_knees(2).txt'
        },
        {
          file: 'howmediaca-ostenonics_knees(3).txt'
        }
      ]
    },
    {
      contract: 'Johnson & Johnson (Dupuy Synthes)',
      type: 'Marketing',
      subs: [
        {
          file: 'johnson-johnson(1).txt'
        },
        {
          file: 'johnson-johnson(2).txt'
        },
        {
          file: 'johnson-johnson(3).txt'
        }
      ]
    }
  ];

  sortedData;

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  sortData(sort: Sort) {


    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {



      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'contract':
          return compare(a.contract, b.contract, isAsc);
        case 'type':
          return compare(a.type, b.type, isAsc);

        default:
          return 0;
      }
    });

    console.log(sort);

  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

export const TableNativeData = {
  name: 'TableNative'
};
