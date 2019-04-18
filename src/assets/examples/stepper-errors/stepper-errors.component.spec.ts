import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperErrorsComponentComponent } from './stepper-errors.component';

describe('StepperErrorsComponentComponent', () => {
  let component: StepperErrorsComponentComponent;
  let fixture: ComponentFixture<StepperErrorsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperErrorsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperErrorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
