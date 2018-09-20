import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackIndicatorSuccessComponent } from './feedback-indicator-success.component';

describe('FeedbackIndicatorSuccessComponent', () => {
  let component: FeedbackIndicatorSuccessComponent;
  let fixture: ComponentFixture<FeedbackIndicatorSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackIndicatorSuccessComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackIndicatorSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
