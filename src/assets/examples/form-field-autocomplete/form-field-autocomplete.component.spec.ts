import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldAutocompleteComponentComponent } from './form-field-autocomplete.component';

describe('FormFieldAutocompleteComponentComponent', () => {
  let component: FormFieldAutocompleteComponentComponent;
  let fixture: ComponentFixture<FormFieldAutocompleteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldAutocompleteComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldAutocompleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
