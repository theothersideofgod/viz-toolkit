import { VizNodataModule } from './viz-nodata.module';

describe('VizNodataModule', () => {
  let vizNodataModule: VizNodataModule;

  beforeEach(() => {
    vizNodataModule = new VizNodataModule();
  });

  it('should create an instance', () => {
    expect(vizNodataModule).toBeTruthy();
  });
});
