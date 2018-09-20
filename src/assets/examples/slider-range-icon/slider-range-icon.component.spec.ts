import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRangeIconComponent } from './slider-range-icon.component';

describe('SliderRangeIconComponent', () => {
  let component: SliderRangeIconComponent;
  let fixture: ComponentFixture<SliderRangeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
