import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'form-field-autocomplete',
  templateUrl: 'form-field-autocomplete.component.html',
  styleUrls: ['form-field-autocomplete.component.css']
})
export class FormFieldAutocompleteComponent implements OnInit {
  myControl = new FormControl();
  options: User[] = [{ name: 'On' }, { name: 'Off' }, { name: 'Offline' }, { name: 'Offset' }];
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

export const FormFieldAutocompleteData = {
  name: 'FormFieldAutocomplete'
};
