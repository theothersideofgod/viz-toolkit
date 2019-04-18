import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperOptionalComponentComponent } from './stepper-optional.component';

describe('StepperOptionalComponentComponent', () => {
  let component: StepperOptionalComponentComponent;
  let fixture: ComponentFixture<StepperOptionalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperOptionalComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperOptionalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
