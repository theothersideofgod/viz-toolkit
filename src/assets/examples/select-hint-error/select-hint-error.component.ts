import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface Animal {
  name: string;
  sound: string;
}

/** @title Select with form field features */
@Component({
  selector: 'select-hint-error',
  templateUrl: 'select-hint-error.component.html',
  styleUrls: ['select-hint-error.component.css'],
})
export class SelectHintErrorComponent {
  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
}
