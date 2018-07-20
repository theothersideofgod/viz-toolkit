import { VizProgressBarModule } from './viz-progress-bar.module';

describe('VizProgressBarModule', () => {
  let vizProgressBarModule: VizProgressBarModule;

  beforeEach(() => {
    vizProgressBarModule = new VizProgressBarModule();
  });

  it('should create an instance', () => {
    expect(vizProgressBarModule).toBeTruthy();
  });
});
