import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerStartDateComponentComponent } from './date-picker-start-date.component';

describe('DatePickerStartDateComponentComponent', () => {
  let component: DatePickerStartDateComponentComponent;
  let fixture: ComponentFixture<DatePickerStartDateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerStartDateComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerStartDateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
