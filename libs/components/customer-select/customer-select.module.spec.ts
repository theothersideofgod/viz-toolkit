import { CustomerSelectModule } from './customer-select.module';

describe('CustomerSelectModule', () => {
  let customerSelectModule: CustomerSelectModule;

  beforeEach(() => {
    customerSelectModule = new CustomerSelectModule();
  });

  it('should create an instance', () => {
    expect(customerSelectModule).toBeTruthy();
  });
});
