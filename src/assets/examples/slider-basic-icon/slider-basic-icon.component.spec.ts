import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBasicIconComponent } from './slider-basic-icon.component';
import { VizSliderModule } from 'libs';
import { MatIconModule } from '@angular/material';

describe('SliderBasicIconComponent', () => {
  let component: SliderBasicIconComponent;
  let fixture: ComponentFixture<SliderBasicIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizSliderModule, MatIconModule],
      declarations: [SliderBasicIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBasicIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
