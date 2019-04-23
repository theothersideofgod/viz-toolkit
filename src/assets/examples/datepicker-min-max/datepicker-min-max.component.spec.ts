import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMinMaxComponentComponent } from './datepicker-min-max.component';

describe('DatepickerMinMaxComponentComponent', () => {
  let component: DatepickerMinMaxComponentComponent;
  let fixture: ComponentFixture<DatepickerMinMaxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerMinMaxComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerMinMaxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
