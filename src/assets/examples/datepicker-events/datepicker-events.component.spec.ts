import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerEventsComponentComponent } from './datepicker-events.component';

describe('DatepickerEventsComponentComponent', () => {
  let component: DatepickerEventsComponentComponent;
  let fixture: ComponentFixture<DatepickerEventsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerEventsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerEventsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
