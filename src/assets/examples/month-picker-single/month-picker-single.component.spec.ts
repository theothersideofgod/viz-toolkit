import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPickerSingleComponentComponent } from './month-picker-single.component';

describe('MonthPickerSingleComponentComponent', () => {
  let component: MonthPickerSingleComponentComponent;
  let fixture: ComponentFixture<MonthPickerSingleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthPickerSingleComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPickerSingleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
