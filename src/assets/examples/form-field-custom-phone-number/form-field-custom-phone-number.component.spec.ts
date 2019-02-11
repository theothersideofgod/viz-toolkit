import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldCustomPhoneNumberComponentComponent } from './form-field-custom-phone-number.component';

describe('FormFieldCustomPhoneNumberComponentComponent', () => {
  let component: FormFieldCustomPhoneNumberComponentComponent;
  let fixture: ComponentFixture<FormFieldCustomPhoneNumberComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldCustomPhoneNumberComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldCustomPhoneNumberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
