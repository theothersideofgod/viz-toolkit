import { VizTreeModule } from './viz-tree.module';

describe('VizTreeModule', () => {
  let vizTreeModule: VizTreeModule;

  beforeEach(() => {
    vizTreeModule = new VizTreeModule();
  });

  it('should create an instance', () => {
    expect(vizTreeModule).toBeTruthy();
  });
});
