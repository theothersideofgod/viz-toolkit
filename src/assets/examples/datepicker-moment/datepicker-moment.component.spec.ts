import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMomentComponentComponent } from './datepicker-moment.component';

describe('DatepickerMomentComponentComponent', () => {
  let component: DatepickerMomentComponentComponent;
  let fixture: ComponentFixture<DatepickerMomentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerMomentComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerMomentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
