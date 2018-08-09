import { VizCardModule } from './viz-card.module';

describe('VizCardModule', () => {
  let vizCardModule: VizCardModule;

  beforeEach(() => {
    vizCardModule = new VizCardModule();
  });

  it('should create an instance', () => {
    expect(vizCardModule).toBeTruthy();
  });
});
