import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldErrorComponentComponent } from './form-field-error.component';

describe('FormFieldErrorComponentComponent', () => {
  let component: FormFieldErrorComponentComponent;
  let fixture: ComponentFixture<FormFieldErrorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldErrorComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldErrorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
