import { Sort } from '@angular/material';
import { Component, OnInit } from '@angular/core';
export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}
@Component({
  selector: 'table-viz-differ-element',
  templateUrl: 'table-viz-differ-element.component.html',
  styleUrls: ['table-viz-differ-element.component.css']
})
export class TableVizDifferElementComponent implements OnInit {
  desserts = [
    {
      contract: 'Zipper Hips & Knees',
      type: 'Marketing',
      isExpanded: true,
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
      isExpanded: false,
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
      isExpanded: false,
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
  links = ['JAN', 'FEB', 'MAR'];
  activeLink = this.links[0];

  items = [
    { color: '#00CC99', name: 'CPT Description 01', y: 30 },
    { color: '#9966FF', name: 'CPT Description 01', y: 22 },
    { color: '#3399FF', name: 'CPT Description 01', y: 20 },
    { color: '#FF9933', name: 'CPT Description 01', y: 18 },
    { color: '#99CC33', name: 'CPT Description 01', y: 10 }
  ];

  chartOption = {
    chart: {
      // plotBackgroundColor: '#fafafa',
      backgroundColor: '#fafafa',
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: ''
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false
        },
        center: ['50%', '50%'],
        borderWidth: 0,
        point: {
          events: {
            mouseOver: this.setCenterText.bind(this)
          }
        },
        events: {
          mouseOut: this.unsetCenterText.bind(this)
        }
      }
    },
    series: [
      {
        type: 'pie',
        name: 'Browser share',
        innerSize: '70%',
        data: this.items
      }
    ]
  };

  centerValue = null

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  setCenterText(e) {
    this.centerValue = e.target.y
  }

  unsetCenterText() {
    this.centerValue = null
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
  ngOnInit() {}
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
