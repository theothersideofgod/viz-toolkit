import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPickerRangeComponentComponent } from './month-picker-range.component';

describe('MonthPickerRangeComponentComponent', () => {
  let component: MonthPickerRangeComponentComponent;
  let fixture: ComponentFixture<MonthPickerRangeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthPickerRangeComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPickerRangeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
