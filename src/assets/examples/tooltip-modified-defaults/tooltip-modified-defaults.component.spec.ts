import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipModifiedDefaultsComponentComponent } from './tooltip-modified-defaults.component';

describe('TooltipModifiedDefaultsComponentComponent', () => {
  let component: TooltipModifiedDefaultsComponentComponent;
  let fixture: ComponentFixture<TooltipModifiedDefaultsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipModifiedDefaultsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipModifiedDefaultsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
