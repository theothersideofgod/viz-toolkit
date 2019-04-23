import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerOverviewComponentComponent } from './datepicker-overview.component';

describe('DatepickerOverviewComponentComponent', () => {
  let component: DatepickerOverviewComponentComponent;
  let fixture: ComponentFixture<DatepickerOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
