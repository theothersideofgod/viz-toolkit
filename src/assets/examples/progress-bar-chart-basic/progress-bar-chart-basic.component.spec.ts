import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarChartBasicComponent } from './progress-bar-chart-basic.component';
import { VizChartModule } from 'libs';

describe('ProgressBarChartBasicComponent', () => {
  let component: ProgressBarChartBasicComponent;
  let fixture: ComponentFixture<ProgressBarChartBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizChartModule],
      declarations: [ProgressBarChartBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarChartBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
