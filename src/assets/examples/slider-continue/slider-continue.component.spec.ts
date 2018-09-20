import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderContinueComponent } from './slider-continue.component';

describe('SliderContinueComponent', () => {
  let component: SliderContinueComponent;
  let fixture: ComponentFixture<SliderContinueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderContinueComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
