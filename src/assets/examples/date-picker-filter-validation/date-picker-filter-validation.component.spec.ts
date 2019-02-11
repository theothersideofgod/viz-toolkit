import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerFilterValidationComponentComponent } from './date-picker-filter-validation.component';

describe('DatePickerFilterValidationComponentComponent', () => {
  let component: DatePickerFilterValidationComponentComponent;
  let fixture: ComponentFixture<DatePickerFilterValidationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerFilterValidationComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerFilterValidationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
