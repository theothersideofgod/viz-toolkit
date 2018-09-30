import { VizSlideToggleModule } from './viz-slide-toggle.module';

describe('VizSlideToggleModule', () => {
  let vizSlideToggleModule: VizSlideToggleModule;

  beforeEach(() => {
    vizSlideToggleModule = new VizSlideToggleModule();
  });

  it('should create an instance', () => {
    expect(vizSlideToggleModule).toBeTruthy();
  });
});

