import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderConfigurableComponentComponent } from './slider-configurable.component';

describe('SliderConfigurableComponentComponent', () => {
  let component: SliderConfigurableComponentComponent;
  let fixture: ComponentFixture<SliderConfigurableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderConfigurableComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderConfigurableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
