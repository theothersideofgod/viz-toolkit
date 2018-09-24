import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRangeIconComponent } from './slider-range-icon.component';
import { VizSliderModule } from 'libs';
import { MatIconModule } from '@angular/material';

describe('SliderRangeIconComponent', () => {
  let component: SliderRangeIconComponent;
  let fixture: ComponentFixture<SliderRangeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizSliderModule, MatIconModule],
      declarations: [SliderRangeIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderRangeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
