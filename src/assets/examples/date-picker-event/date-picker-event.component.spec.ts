import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerEventComponent } from './date-picker-event.component';

describe('DatePickerEventComponent', () => {
  let component: DatePickerEventComponent;
  let fixture: ComponentFixture<DatePickerEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerEventComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
