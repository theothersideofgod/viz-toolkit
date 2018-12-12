import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerSingleErrorComponent } from './date-picker-single-error.component';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VizDateRangePickerModule } from 'libs/viz-toolkit';

describe('DatePickerSingleErrorComponent', () => {
  let component: DatePickerSingleErrorComponent;
  let fixture: ComponentFixture<DatePickerSingleErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        BrowserAnimationsModule,
        VizDateRangePickerModule
      ],
      declarations: [DatePickerSingleErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerSingleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
