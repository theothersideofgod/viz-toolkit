import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBasicComponent } from './slider-basic.component';
import { VizSliderModule } from 'libs';

describe('SliderBasicComponent', () => {
  let component: SliderBasicComponent;
  let fixture: ComponentFixture<SliderBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizSliderModule],
      declarations: [SliderBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
