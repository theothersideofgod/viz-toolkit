import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDelayComponentComponent } from './tooltip-delay.component';

describe('TooltipDelayComponentComponent', () => {
  let component: TooltipDelayComponentComponent;
  let fixture: ComponentFixture<TooltipDelayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipDelayComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDelayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
