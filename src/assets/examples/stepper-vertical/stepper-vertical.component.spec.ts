import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperVerticalComponentComponent } from './stepper-vertical.component';

describe('StepperVerticalComponentComponent', () => {
  let component: StepperVerticalComponentComponent;
  let fixture: ComponentFixture<StepperVerticalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperVerticalComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperVerticalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
