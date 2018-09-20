import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotPlotChartBasicComponent } from './dot-plot-chart-basic.component';

describe('DotPlotChartBasicComponent', () => {
  let component: DotPlotChartBasicComponent;
  let fixture: ComponentFixture<DotPlotChartBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DotPlotChartBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotPlotChartBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
