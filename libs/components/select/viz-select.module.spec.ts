import { VizSelectModule } from './viz-select.module';

describe('VizSelectModule', () => {
  let vizSelectModule: VizSelectModule;

  beforeEach(() => {
    vizSelectModule = new VizSelectModule();
  });

  it('should create an instance', () => {
    expect(vizSelectModule).toBeTruthy();
  });
});
