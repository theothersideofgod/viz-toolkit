import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'expansion-panel-table.component',
  templateUrl: 'expansion-panel-table.component.html',
  styleUrls: ['expansion-panel-table.component.css']
})
export class ExpansionPanelTableComponent {
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

  constructor() {
  }
}



export const ExpansionPanelTableData = {
	name: 'ExpansionPanelTable'
}