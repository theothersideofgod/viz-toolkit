import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldOverviewComponentComponent } from './form-field-overview.component';

describe('FormFieldOverviewComponentComponent', () => {
  let component: FormFieldOverviewComponentComponent;
  let fixture: ComponentFixture<FormFieldOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
