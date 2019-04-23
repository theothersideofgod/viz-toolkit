import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerStartViewComponentComponent } from './datepicker-start-view.component';

describe('DatepickerStartViewComponentComponent', () => {
  let component: DatepickerStartViewComponentComponent;
  let fixture: ComponentFixture<DatepickerStartViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerStartViewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerStartViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
