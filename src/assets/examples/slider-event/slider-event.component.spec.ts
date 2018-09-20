import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderEventComponent } from './slider-event.component';
import { MatIconModule, MatSliderModule } from '@angular/material';

describe('SliderEventComponent', () => {
  let component: SliderEventComponent;
  let fixture: ComponentFixture<SliderEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSliderModule, MatIconModule],
      declarations: [SliderEventComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
