import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackIndicatorWarningComponent } from './feedback-indicator-warning.component';

describe('FeedbackIndicatorWarningComponent', () => {
  let component: FeedbackIndicatorWarningComponent;
  let fixture: ComponentFixture<FeedbackIndicatorWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
