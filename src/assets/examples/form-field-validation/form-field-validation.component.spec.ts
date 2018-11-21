import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldValidationComponentComponent } from './form-field-validation.component';

describe('FormFieldValidationComponentComponent', () => {
  let component: FormFieldValidationComponentComponent;
  let fixture: ComponentFixture<FormFieldValidationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldValidationComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldValidationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
