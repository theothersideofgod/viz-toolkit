import {Component} from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

export interface Car {
  value: string;
  viewValue: string;
}

/**
 * @title Select in a form
 */
@Component({
  selector: 'select-form',
  templateUrl: 'select-form.component.html',
  styleUrls: ['select-form.component.css'],
})
export class SelectFormComponent {
  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
}
