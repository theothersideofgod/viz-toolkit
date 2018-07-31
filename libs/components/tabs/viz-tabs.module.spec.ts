import { VizTabsModule } from './viz-tabs.module';

describe('VizTabsModule', () => {
  let vizTabsModule: VizTabsModule;

  beforeEach(() => {
    vizTabsModule = new VizTabsModule();
  });

  it('should create an instance', () => {
    expect(vizTabsModule).toBeTruthy();
  });
});
