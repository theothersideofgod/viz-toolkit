import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerSelectedValueComponentComponent } from './date-picker-selected-value.component';

describe('DatePickerSelectedValueComponentComponent', () => {
  let component: DatePickerSelectedValueComponentComponent;
  let fixture: ComponentFixture<DatePickerSelectedValueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerSelectedValueComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerSelectedValueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
