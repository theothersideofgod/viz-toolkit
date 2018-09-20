import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkChartBasicComponent } from './benchmark-chart-basic.component';

describe('BenchmarkChartBasicComponent', () => {
  let component: BenchmarkChartBasicComponent;
  let fixture: ComponentFixture<BenchmarkChartBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BenchmarkChartBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchmarkChartBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
