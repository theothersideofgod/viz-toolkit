import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackIndicatorWarningComponent } from './feedback-indicator-warning.component';
import { VizFeedbackIndicatorModule } from 'libs';

describe('FeedbackIndicatorWarningComponent', () => {
  let component: FeedbackIndicatorWarningComponent;
  let fixture: ComponentFixture<FeedbackIndicatorWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizFeedbackIndicatorModule],
      declarations: [FeedbackIndicatorWarningComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackIndicatorWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
