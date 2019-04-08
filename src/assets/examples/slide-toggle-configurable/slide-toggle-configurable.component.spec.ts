import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleConfigurableComponentComponent } from './slide-toggle-configurable.component';

describe('SlideToggleConfigurableComponentComponent', () => {
  let component: SlideToggleConfigurableComponentComponent;
  let fixture: ComponentFixture<SlideToggleConfigurableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlideToggleConfigurableComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleConfigurableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
