import { VizChartModule } from './viz-chart.module';

describe('VizChartModule', () => {
  let vizChartModule: VizChartModule;

  beforeEach(() => {
    vizChartModule = new VizChartModule();
  });

  it('should create an instance', () => {
    expect(vizChartModule).toBeTruthy();
  });
});
