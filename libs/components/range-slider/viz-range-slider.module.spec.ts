import { VizRangeSliderModule } from './viz-range-slider.module';

describe('VizRangeSliderModule', () => {
  let vizRangeSliderModule: VizRangeSliderModule;

  beforeEach(() => {
    vizRangeSliderModule = new VizRangeSliderModule();
  });

  it('should create an instance', () => {
    expect(vizRangeSliderModule).toBeTruthy();
  });
});
