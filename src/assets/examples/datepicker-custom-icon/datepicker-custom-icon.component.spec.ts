import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCustomIconComponentComponent } from './datepicker-custom-icon.component';

describe('DatepickerCustomIconComponentComponent', () => {
  let component: DatepickerCustomIconComponentComponent;
  let fixture: ComponentFixture<DatepickerCustomIconComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerCustomIconComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerCustomIconComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
