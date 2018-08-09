import { VizTooltipModule } from './viz-tooltip.module';

describe('VizTooltipModule', () => {
  let vizTooltipModule: VizTooltipModule;

  beforeEach(() => {
    vizTooltipModule = new VizTooltipModule();
  });

  it('should create an instance', () => {
    expect(vizTooltipModule).toBeTruthy();
  });
});
