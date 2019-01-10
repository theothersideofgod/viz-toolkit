import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerRangeValidationComponentComponent } from './date-picker-range-validation.component';

describe('DatePickerRangeValidationComponentComponent', () => {
  let component: DatePickerRangeValidationComponentComponent;
  let fixture: ComponentFixture<DatePickerRangeValidationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerRangeValidationComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerRangeValidationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
