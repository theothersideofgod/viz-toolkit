import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarChartBasicComponent } from './progress-bar-chart-basic.component';

describe('ProgressBarChartBasicComponent', () => {
  let component: ProgressBarChartBasicComponent;
  let fixture: ComponentFixture<ProgressBarChartBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
