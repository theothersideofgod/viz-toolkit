import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackIndicatorBasicComponent } from './feedback-indicator-basic.component';

describe('FeedbackIndicatorBasicComponent', () => {
  let component: FeedbackIndicatorBasicComponent;
  let fixture: ComponentFixture<FeedbackIndicatorBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
