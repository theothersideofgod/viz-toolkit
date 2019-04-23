import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerApiComponentComponent } from './datepicker-api.component';

describe('DatepickerApiComponentComponent', () => {
  let component: DatepickerApiComponentComponent;
  let fixture: ComponentFixture<DatepickerApiComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerApiComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerApiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
