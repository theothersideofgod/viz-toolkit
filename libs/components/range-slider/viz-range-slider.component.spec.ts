import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizRangeSliderComponent } from './viz-range-slider.component';

describe('VizRangeSliderComponent', () => {
  let component: VizRangeSliderComponent;
  let fixture: ComponentFixture<VizRangeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizRangeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
