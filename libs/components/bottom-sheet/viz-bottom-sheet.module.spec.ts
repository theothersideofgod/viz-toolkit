import { VizBottomSheetModule } from './viz-bottom-sheet.module';

describe('VizBottomSheetModule', () => {
  let vizBottomSheetModule: VizBottomSheetModule;

  beforeEach(() => {
    vizBottomSheetModule = new VizBottomSheetModule();
  });

  it('should create an instance', () => {
    expect(vizBottomSheetModule).toBeTruthy();
  });
});
