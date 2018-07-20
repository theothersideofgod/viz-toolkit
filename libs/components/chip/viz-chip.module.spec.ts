import { VizChipModule } from './viz-chip.module';

describe('VizChipModule', () => {
  let vizChipModule: VizChipModule;

  beforeEach(() => {
    vizChipModule = new VizChipModule();
  });

  it('should create an instance', () => {
    expect(vizChipModule).toBeTruthy();
  });
});
