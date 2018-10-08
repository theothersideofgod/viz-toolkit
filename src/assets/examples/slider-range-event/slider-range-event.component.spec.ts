import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRangeEventComponent } from './slider-range-event.component';
import { VizSliderModule } from 'libs';

describe('SliderRangeEventComponent', () => {
  let component: SliderRangeEventComponent;
  let fixture: ComponentFixture<SliderRangeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizSliderModule],
      declarations: [SliderRangeEventComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderRangeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
