import { VizSnackbarModule } from './viz-snackbar.module';

describe('VizSnackbarModule', () => {
  let vizSnackbarModule: VizSnackbarModule;

  beforeEach(() => {
    vizSnackbarModule = new VizSnackbarModule();
  });

  it('should create an instance', () => {
    expect(vizSnackbarModule).toBeTruthy();
  });
});
