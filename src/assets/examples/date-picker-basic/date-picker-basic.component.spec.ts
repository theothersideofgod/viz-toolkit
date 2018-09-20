import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerBasicComponent } from './date-picker-basic.component';
import { VizDateRangePickerModule } from 'libs';
import {
  MatDatepickerModule,
  MatFormField,
  MatFormFieldModule,
  MatNativeDateModule,
  MatFormFieldControl,
  MatInputModule
} from '@angular/material';

import { MatRangeNativeDateModule } from 'mat-range-datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DatePickerBasicComponent', () => {
  let component: DatePickerBasicComponent;
  let fixture: ComponentFixture<DatePickerBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        BrowserAnimationsModule,
        VizDateRangePickerModule,
        MatRangeNativeDateModule
      ],
      declarations: [DatePickerBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
