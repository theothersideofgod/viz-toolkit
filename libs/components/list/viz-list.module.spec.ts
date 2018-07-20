import { VizListModule } from './viz-list.module';

describe('VizListModule', () => {
  let vizListModule: VizListModule;

  beforeEach(() => {
    vizListModule = new VizListModule();
  });

  it('should create an instance', () => {
    expect(vizListModule).toBeTruthy();
  });
});
