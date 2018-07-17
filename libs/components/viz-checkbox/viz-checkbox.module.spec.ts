import { VizCheckboxModule } from './viz-checkbox.module';

describe('VizCheckboxModule', () => {
  let vizCheckboxModule: VizCheckboxModule;

  beforeEach(() => {
    vizCheckboxModule = new VizCheckboxModule();
  });

  it('should create an instance', () => {
    expect(vizCheckboxModule).toBeTruthy();
  });
});
