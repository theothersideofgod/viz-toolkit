import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerEventComponent } from './date-picker-event.component';
import {
  MatDatepickerModule,
  MatFormField,
  MatFormFieldModule,
  MatNativeDateModule,
  MatFormFieldControl,
  MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('DatePickerEventComponent', () => {
  let component: DatePickerEventComponent;
  let fixture: ComponentFixture<DatePickerEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
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
