import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldAutocompleteGroupComponentComponent } from './form-field-autocomplete-group.component';

describe('FormFieldAutocompleteGroupComponentComponent', () => {
  let component: FormFieldAutocompleteGroupComponentComponent;
  let fixture: ComponentFixture<FormFieldAutocompleteGroupComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldAutocompleteGroupComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldAutocompleteGroupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
