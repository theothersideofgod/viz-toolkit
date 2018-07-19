import { VizIconModule } from './viz-icon.module';

describe('VizIconModule', () => {
  let vizIconModule: VizIconModule;

  beforeEach(() => {
    vizIconModule = new VizIconModule();
  });

  it('should create an instance', () => {
    expect(vizIconModule).toBeTruthy();
  });
});
