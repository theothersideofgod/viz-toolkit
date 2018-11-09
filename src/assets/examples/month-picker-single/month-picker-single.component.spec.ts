import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPickerSingleComponent } from './month-picker-single.component';
import { VizDateRangePickerModule } from 'libs';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MonthPickerSingleComponent', () => {
  let component: MonthPickerSingleComponent;
  let fixture: ComponentFixture<MonthPickerSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizDateRangePickerModule, BrowserAnimationsModule],
      declarations: [MonthPickerSingleComponent],
      providers: [{ provide: DateAdapter, useClass: NativeDateAdapter }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPickerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
