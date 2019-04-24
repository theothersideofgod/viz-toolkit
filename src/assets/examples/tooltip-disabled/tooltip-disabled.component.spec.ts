import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDisabledComponentComponent } from './tooltip-disabled.component';

describe('TooltipDisabledComponentComponent', () => {
  let component: TooltipDisabledComponentComponent;
  let fixture: ComponentFixture<TooltipDisabledComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipDisabledComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDisabledComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
