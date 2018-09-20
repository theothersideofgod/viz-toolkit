import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotPlotChartBasicComponent } from './dot-plot-chart-basic.component';
import { VizChartModule } from 'libs';

describe('DotPlotChartBasicComponent', () => {
  let component: DotPlotChartBasicComponent;
  let fixture: ComponentFixture<DotPlotChartBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizChartModule],
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
