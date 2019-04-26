import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldLabelComponentComponent } from './form-field-label.component';

describe('FormFieldLabelComponentComponent', () => {
  let component: FormFieldLabelComponentComponent;
  let fixture: ComponentFixture<FormFieldLabelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldLabelComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldLabelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
