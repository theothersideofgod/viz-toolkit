import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleDisableComponent } from './slide-toggle-disable.component';

describe('SlideToggleDisableComponent', () => {
  let component: SlideToggleDisableComponent;
  let fixture: ComponentFixture<SlideToggleDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlideToggleDisableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
