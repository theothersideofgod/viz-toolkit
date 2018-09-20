import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerSingleComponent } from './date-picker-single.component';
import {
  MatDatepickerModule,
  MatFormField,
  MatFormFieldModule,
  MatNativeDateModule,
  MatFormFieldControl,
  MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('DatePickerSingleComponent', () => {
  let component: DatePickerSingleComponent;
  let fixture: ComponentFixture<DatePickerSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [DatePickerSingleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
