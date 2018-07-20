import { VizBadgeModule } from './viz-badge.module';

describe('VizBadgeModule', () => {
  let vizBadgeModule: VizBadgeModule;

  beforeEach(() => {
    vizBadgeModule = new VizBadgeModule();
  });

  it('should create an instance', () => {
    expect(vizBadgeModule).toBeTruthy();
  });
});
