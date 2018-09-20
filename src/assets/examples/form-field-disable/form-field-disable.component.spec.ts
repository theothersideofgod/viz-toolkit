import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldDisableComponent } from './form-field-disable.component';

describe('FormFieldDisableComponent', () => {
  let component: FormFieldDisableComponent;
  let fixture: ComponentFixture<FormFieldDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldDisableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
