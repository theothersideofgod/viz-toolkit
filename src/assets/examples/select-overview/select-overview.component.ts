import {Component} from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview',
  templateUrl: 'select-overview.component.html',
  styleUrls: ['select-overview.component.css'],
})
export class SelectOverviewComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
