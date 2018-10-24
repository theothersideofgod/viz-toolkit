import { VizHttpStatusModule } from './viz-http-status.module';

describe('VizHttpStatusModule', () => {
  let vizHttpStatusModule: VizHttpStatusModule;

  beforeEach(() => {
    vizHttpStatusModule = new VizHttpStatusModule();
  });

  it('should create an instance', () => {
    expect(vizHttpStatusModule).toBeTruthy();
  });
});
