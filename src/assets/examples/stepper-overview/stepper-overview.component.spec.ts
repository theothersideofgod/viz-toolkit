import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperOverviewComponentComponent } from './stepper-overview.component';

describe('StepperOverviewComponentComponent', () => {
  let component: StepperOverviewComponentComponent;
  let fixture: ComponentFixture<StepperOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
