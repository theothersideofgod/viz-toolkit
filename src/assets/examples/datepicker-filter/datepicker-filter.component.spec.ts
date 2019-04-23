import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerFilterComponentComponent } from './datepicker-filter.component';

describe('DatepickerFilterComponentComponent', () => {
  let component: DatepickerFilterComponentComponent;
  let fixture: ComponentFixture<DatepickerFilterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerFilterComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
