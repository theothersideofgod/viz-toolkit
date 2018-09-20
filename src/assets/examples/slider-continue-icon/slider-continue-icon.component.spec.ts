import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderContinueIconComponent } from './slider-continue-icon.component';

describe('SliderContinueIconComponent', () => {
  let component: SliderContinueIconComponent;
  let fixture: ComponentFixture<SliderContinueIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderContinueIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderContinueIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
