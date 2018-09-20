import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackIndicatorBasicComponent } from './feedback-indicator-basic.component';
import { VizFeedbackIndicatorModule } from 'libs';

describe('FeedbackIndicatorBasicComponent', () => {
  let component: FeedbackIndicatorBasicComponent;
  let fixture: ComponentFixture<FeedbackIndicatorBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizFeedbackIndicatorModule],
      declarations: [FeedbackIndicatorBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackIndicatorBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
