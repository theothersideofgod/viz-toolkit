import { VizSearchModule } from './viz-search.module';

describe('VizSearchModule', () => {
  let vizSearchModule: VizSearchModule;

  beforeEach(() => {
    vizSearchModule = new VizSearchModule();
  });

  it('should create an instance', () => {
    expect(vizSearchModule).toBeTruthy();
  });
});
