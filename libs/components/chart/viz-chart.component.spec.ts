import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizChartComponent } from './viz-chart.component';

describe('VizChartComponent', () => {
  let component: VizChartComponent;
  let fixture: ComponentFixture<VizChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
