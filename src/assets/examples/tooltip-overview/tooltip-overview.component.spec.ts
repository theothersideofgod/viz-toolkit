import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipOverviewComponentComponent } from './tooltip-overview.component';

describe('TooltipOverviewComponentComponent', () => {
  let component: TooltipOverviewComponentComponent;
  let fixture: ComponentFixture<TooltipOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
