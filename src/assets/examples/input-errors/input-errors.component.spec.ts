import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorsComponentComponent } from './input-errors.component';

describe('InputErrorsComponentComponent', () => {
  let component: InputErrorsComponentComponent;
  let fixture: ComponentFixture<InputErrorsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputErrorsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
