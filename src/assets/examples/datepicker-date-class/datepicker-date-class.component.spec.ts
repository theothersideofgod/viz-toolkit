import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerDateClassComponentComponent } from './datepicker-date-class.component';

describe('DatepickerDateClassComponentComponent', () => {
  let component: DatepickerDateClassComponentComponent;
  let fixture: ComponentFixture<DatepickerDateClassComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerDateClassComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerDateClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
