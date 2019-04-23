import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerTouchComponentComponent } from './datepicker-touch.component';

describe('DatepickerTouchComponentComponent', () => {
  let component: DatepickerTouchComponentComponent;
  let fixture: ComponentFixture<DatepickerTouchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerTouchComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerTouchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
