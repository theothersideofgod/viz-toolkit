import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
  icon: string;
}

@Component({
  selector: 'form-field-autocomplete-icon',
  templateUrl: 'form-field-autocomplete-icon.component.html',
  styleUrls: ['form-field-autocomplete-icon.component.css']
})
export class FormFieldAutocompleteIconComponent implements OnInit {
  myControl = new FormControl();
  options: User[] = [
    { name: 'Face', icon: 'face' },
    { name: 'Filter', icon: 'filter' },
    { name: 'Folder', icon: 'folder' },
    { name: 'Feedback', icon: 'feedback' }
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith<string | User>(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice()))
    );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
}

export const FormFieldAutocompleteIconData = {
  name: 'FormFieldAutocompleteIcon'
};
