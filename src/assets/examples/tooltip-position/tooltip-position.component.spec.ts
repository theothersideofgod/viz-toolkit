import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipPositionComponentComponent } from './tooltip-position.component';

describe('TooltipPositionComponentComponent', () => {
  let component: TooltipPositionComponentComponent;
  let fixture: ComponentFixture<TooltipPositionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipPositionComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipPositionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
