import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldAutocompleteComponent } from './form-field-autocomplete.component';
import { MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormFieldAutocompleteComponent', () => {
  let component: FormFieldAutocompleteComponent;
  let fixture: ComponentFixture<FormFieldAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, FormsModule, MatInputModule, BrowserAnimationsModule, ReactiveFormsModule, MatAutocompleteModule],
      declarations: [FormFieldAutocompleteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
