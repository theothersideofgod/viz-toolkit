import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFormattingComponentComponent } from './slider-formatting.component';

describe('SliderFormattingComponentComponent', () => {
  let component: SliderFormattingComponentComponent;
  let fixture: ComponentFixture<SliderFormattingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderFormattingComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFormattingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
