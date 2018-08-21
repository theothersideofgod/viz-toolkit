import { VizTableModule } from './viz-table.module';

describe('VizTableModule', () => {
  let vizTableModule: VizTableModule;

  beforeEach(() => {
    vizTableModule = new VizTableModule();
  });

  it('should create an instance', () => {
    expect(vizTableModule).toBeTruthy();
  });
});
