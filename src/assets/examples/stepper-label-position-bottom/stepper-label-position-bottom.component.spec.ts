import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperLabelPositionBottomComponentComponent } from './stepper-label-position-bottom.component';

describe('StepperLabelPositionBottomComponentComponent', () => {
  let component: StepperLabelPositionBottomComponentComponent;
  let fixture: ComponentFixture<StepperLabelPositionBottomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperLabelPositionBottomComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperLabelPositionBottomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
