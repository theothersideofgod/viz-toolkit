import { VizPaginatorModule } from './viz-paginator.module';

describe('VizPaginatorModule', () => {
  let vizPaginatorModule: VizPaginatorModule;

  beforeEach(() => {
    vizPaginatorModule = new VizPaginatorModule();
  });

  it('should create an instance', () => {
    expect(vizPaginatorModule).toBeTruthy();
  });
});
