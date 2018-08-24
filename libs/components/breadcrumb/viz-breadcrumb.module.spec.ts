import { VizBreadcrumbModule } from './viz-breadcrumb.module';

describe('VizBreadcrumbModule', () => {
  let vizBreadcrumbModule: VizBreadcrumbModule;

  beforeEach(() => {
    vizBreadcrumbModule = new VizBreadcrumbModule();
  });

  it('should create an instance', () => {
    expect(vizBreadcrumbModule).toBeTruthy();
  });
});
