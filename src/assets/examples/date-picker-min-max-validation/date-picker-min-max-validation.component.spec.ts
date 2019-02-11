import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerMinMaxValidationComponentComponent } from './date-picker-min-max-validation.component';

describe('DatePickerMinMaxValidationComponentComponent', () => {
  let component: DatePickerMinMaxValidationComponentComponent;
  let fixture: ComponentFixture<DatePickerMinMaxValidationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerMinMaxValidationComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerMinMaxValidationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
