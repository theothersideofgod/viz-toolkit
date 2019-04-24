import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipAutoHideComponentComponent } from './tooltip-auto-hide.component';

describe('TooltipAutoHideComponentComponent', () => {
  let component: TooltipAutoHideComponentComponent;
  let fixture: ComponentFixture<TooltipAutoHideComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipAutoHideComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipAutoHideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
