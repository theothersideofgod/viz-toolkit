import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizFeedbackIndicatorComponent } from './viz-feedback-indicator.component';

describe('VizFeedbackIndicatorComponent', () => {
  let component: VizFeedbackIndicatorComponent;
  let fixture: ComponentFixture<VizFeedbackIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizFeedbackIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizFeedbackIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
