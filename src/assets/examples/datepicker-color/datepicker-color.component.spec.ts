import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerColorComponentComponent } from './datepicker-color.component';

describe('DatepickerColorComponentComponent', () => {
  let component: DatepickerColorComponentComponent;
  let fixture: ComponentFixture<DatepickerColorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerColorComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerColorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
