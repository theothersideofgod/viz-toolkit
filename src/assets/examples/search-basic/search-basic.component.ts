import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-basic',
  templateUrl: 'search-basic.component.html',
  styleUrls: ['search-basic.component.css']
})
export class SearchBasicComponent implements OnInit {
  types: string[] = [
    'All',
    'Medicare ID',
    'HCO ID',
    'Member name',
    'Member ID',
    'Shortname/Facility',
    'Invoice Date'
  ];
  results = [
    {
      name: 'Johns Hopkins Hospital - 23145',
      type: 'All'
    },
    {
      name: 'Johns Hopkins Facility 1 - 96251',
      type: 'Medicare ID'
    },
    {
      name: 'Johns Hopkins Facility 2 - 65291',
      type: 'HCO ID'
    },
    {
      name: 'Johns Hopkins Facility 3 - 78291',
      type: 'Member ID'
    }
  ];
  ngOnInit() {}
}

export const SearchBasicData = {
  name: 'SearchBasic'
};
