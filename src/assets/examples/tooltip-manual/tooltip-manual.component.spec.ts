import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipManualComponentComponent } from './tooltip-manual.component';

describe('TooltipManualComponentComponent', () => {
  let component: TooltipManualComponentComponent;
  let fixture: ComponentFixture<TooltipManualComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipManualComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipManualComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
