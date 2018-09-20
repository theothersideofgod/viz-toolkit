import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldBasicComponent } from './form-field-basic.component';

describe('FormFieldBasicComponent', () => {
  let component: FormFieldBasicComponent;
  let fixture: ComponentFixture<FormFieldBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
