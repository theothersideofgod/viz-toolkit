import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRangeComponent } from './slider-range.component';
import { VizSliderModule } from 'libs';

describe('SliderRangeComponent', () => {
  let component: SliderRangeComponent;
  let fixture: ComponentFixture<SliderRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizSliderModule],
      declarations: [SliderRangeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
