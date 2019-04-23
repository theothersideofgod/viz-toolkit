import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerDisabledComponentComponent } from './datepicker-disabled.component';

describe('DatepickerDisabledComponentComponent', () => {
  let component: DatepickerDisabledComponentComponent;
  let fixture: ComponentFixture<DatepickerDisabledComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerDisabledComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerDisabledComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
