import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldClearButtonComponentComponent } from './form-field-clear-button.component';

describe('FormFieldClearButtonComponentComponent', () => {
  let component: FormFieldClearButtonComponentComponent;
  let fixture: ComponentFixture<FormFieldClearButtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldClearButtonComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldClearButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
