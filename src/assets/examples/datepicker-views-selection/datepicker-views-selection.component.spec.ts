import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerViewsSelectionComponentComponent } from './datepicker-views-selection.component';

describe('DatepickerViewsSelectionComponentComponent', () => {
  let component: DatepickerViewsSelectionComponentComponent;
  let fixture: ComponentFixture<DatepickerViewsSelectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerViewsSelectionComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerViewsSelectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
