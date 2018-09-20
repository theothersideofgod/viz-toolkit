import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBasicIconComponent } from './slider-basic-icon.component';

describe('SliderBasicIconComponent', () => {
  let component: SliderBasicIconComponent;
  let fixture: ComponentFixture<SliderBasicIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
