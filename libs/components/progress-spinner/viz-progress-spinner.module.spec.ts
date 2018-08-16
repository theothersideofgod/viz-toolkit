import { VizProgressSpinnerModule } from './viz-progress-spinner.module';

describe('VizProgressSpinnerModule', () => {
  let vizProgressSpinnerModule: VizProgressSpinnerModule;

  beforeEach(() => {
    vizProgressSpinnerModule = new VizProgressSpinnerModule();
  });

  it('should create an instance', () => {
    expect(vizProgressSpinnerModule).toBeTruthy();
  });
});
