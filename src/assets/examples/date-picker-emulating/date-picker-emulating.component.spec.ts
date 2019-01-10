import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerEmulatingComponentComponent } from './date-picker-emulating.component';

describe('DatePickerEmulatingComponentComponent', () => {
  let component: DatePickerEmulatingComponentComponent;
  let fixture: ComponentFixture<DatePickerEmulatingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerEmulatingComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerEmulatingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
