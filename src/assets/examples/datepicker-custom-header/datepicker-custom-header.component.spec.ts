import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCustomHeaderComponentComponent } from './datepicker-custom-header.component';

describe('DatepickerCustomHeaderComponentComponent', () => {
  let component: DatepickerCustomHeaderComponentComponent;
  let fixture: ComponentFixture<DatepickerCustomHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerCustomHeaderComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerCustomHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
