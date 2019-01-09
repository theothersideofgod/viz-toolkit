import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldAutocompleteIconComponentComponent } from './form-field-autocomplete-icon.component';

describe('FormFieldAutocompleteIconComponentComponent', () => {
  let component: FormFieldAutocompleteIconComponentComponent;
  let fixture: ComponentFixture<FormFieldAutocompleteIconComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldAutocompleteIconComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldAutocompleteIconComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
