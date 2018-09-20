import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartBasicComponent } from './bar-chart-basic.component';
import { VizChartComponent } from 'libs/components/chart/viz-chart.component';


describe('BarChartBasicComponent', () => {
  let component: BarChartBasicComponent;
  let fixture: ComponentFixture<BarChartBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartBasicComponent, VizChartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
