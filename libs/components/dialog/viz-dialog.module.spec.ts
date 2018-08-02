import { VizDialogModule } from './viz-dialog.module';

describe('VizDialogModule', () => {
  let vizDialogModule: VizDialogModule;

  beforeEach(() => {
    vizDialogModule = new VizDialogModule();
  });

  it('should create an instance', () => {
    expect(vizDialogModule).toBeTruthy();
  });
});
