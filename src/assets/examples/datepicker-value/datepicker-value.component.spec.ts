import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerValueComponentComponent } from './datepicker-value.component';

describe('DatepickerValueComponentComponent', () => {
  let component: DatepickerValueComponentComponent;
  let fixture: ComponentFixture<DatepickerValueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerValueComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerValueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
