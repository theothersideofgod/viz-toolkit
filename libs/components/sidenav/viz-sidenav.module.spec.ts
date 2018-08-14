import { VizSidenavModule } from './viz-sidenav.module';

describe('VizSidenavModule', () => {
  let vizSidenavModule: VizSidenavModule;

  beforeEach(() => {
    vizSidenavModule = new VizSidenavModule();
  });

  it('should create an instance', () => {
    expect(vizSidenavModule).toBeTruthy();
  });
});
