import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperBasicComponent } from './stepper-basic.component';
import { VizSteppersModule } from 'libs';

describe('StepperBasicComponent', () => {
  let component: StepperBasicComponent;
  let fixture: ComponentFixture<StepperBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizSteppersModule],
      declarations: [StepperBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
