import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperEditableComponentComponent } from './stepper-editable.component';

describe('StepperEditableComponentComponent', () => {
  let component: StepperEditableComponentComponent;
  let fixture: ComponentFixture<StepperEditableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperEditableComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperEditableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
