import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperStatesComponentComponent } from './stepper-states.component';

describe('StepperStatesComponentComponent', () => {
  let component: StepperStatesComponentComponent;
  let fixture: ComponentFixture<StepperStatesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperStatesComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperStatesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
