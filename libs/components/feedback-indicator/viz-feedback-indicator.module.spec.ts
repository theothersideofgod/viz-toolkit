import { VizFeedbackIndicatorModule } from './viz-feedback-indicator.module';

describe('VizFeedbackIndicatorModule', () => {
  let vizFeedbackIndicatorModule: VizFeedbackIndicatorModule;

  beforeEach(() => {
    vizFeedbackIndicatorModule = new VizFeedbackIndicatorModule();
  });

  it('should create an instance', () => {
    expect(vizFeedbackIndicatorModule).toBeTruthy();
  });
});
