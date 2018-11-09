import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPickerRangeComponent } from './month-picker-range.component';
import { VizDateRangePickerModule } from 'libs';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MonthPickerRangeComponent', () => {
  let component: MonthPickerRangeComponent;
  let fixture: ComponentFixture<MonthPickerRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizDateRangePickerModule, BrowserAnimationsModule],
      declarations: [MonthPickerRangeComponent],
      providers: [{ provide: DateAdapter, useClass: NativeDateAdapter }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPickerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

