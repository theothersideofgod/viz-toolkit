import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerLocaleComponentComponent } from './datepicker-locale.component';

describe('DatepickerLocaleComponentComponent', () => {
  let component: DatepickerLocaleComponentComponent;
  let fixture: ComponentFixture<DatepickerLocaleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerLocaleComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerLocaleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
