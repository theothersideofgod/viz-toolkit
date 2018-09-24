import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeChartBasicComponent } from './comparative-chart-basic.component';
import { VizChartModule } from 'libs';

describe('ComparativeChartBasicComponent', () => {
  let component: ComparativeChartBasicComponent;
  let fixture: ComponentFixture<ComparativeChartBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizChartModule],
      declarations: [ComparativeChartBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeChartBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
