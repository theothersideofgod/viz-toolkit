import { VizDatepickerModule } from './viz-datepicker.module';

describe('VizDatepickerModule', () => {
  let datepickerModule: VizDatepickerModule;

  beforeEach(() => {
    datepickerModule = new VizDatepickerModule();
  });

  it('should create an instance', () => {
    expect(datepickerModule).toBeTruthy();
  });
});
