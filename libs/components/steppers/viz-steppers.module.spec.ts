import { VizSteppersModule } from './viz-steppers.module';

describe('VizSteppersModule', () => {
  let vizSteppersModule: VizSteppersModule;

  beforeEach(() => {
    vizSteppersModule = new VizSteppersModule();
  });

  it('should create an instance', () => {
    expect(vizSteppersModule).toBeTruthy();
  });
});
