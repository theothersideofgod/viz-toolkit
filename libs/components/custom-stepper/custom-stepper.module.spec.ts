import { CustomStepperModule } from './custom-stepper.module';

describe('CustomStepperModule', () => {
  let customStepperModule: CustomStepperModule;

  beforeEach(() => {
    customStepperModule = new CustomStepperModule();
  });

  it('should create an instance', () => {
    expect(customStepperModule).toBeTruthy();
  });
});
