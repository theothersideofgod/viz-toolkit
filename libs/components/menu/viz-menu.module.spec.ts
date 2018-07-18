import { VizMenuModule } from './viz-menu.module';

describe('VizMenuModule', () => {
  let vizMenuModule: VizMenuModule;

  beforeEach(() => {
    vizMenuModule = new VizMenuModule();
  });

  it('should create an instance', () => {
    expect(vizMenuModule).toBeTruthy();
  });
});
