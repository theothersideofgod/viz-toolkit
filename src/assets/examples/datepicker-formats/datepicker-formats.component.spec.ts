import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerFormatsComponentComponent } from './datepicker-formats.component';

describe('DatepickerFormatsComponentComponent', () => {
  let component: DatepickerFormatsComponentComponent;
  let fixture: ComponentFixture<DatepickerFormatsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerFormatsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerFormatsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
