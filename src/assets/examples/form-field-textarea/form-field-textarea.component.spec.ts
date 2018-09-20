import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldTextareaComponent } from './form-field-textarea.component';

describe('FormFieldTextareaComponent', () => {
  let component: FormFieldTextareaComponent;
  let fixture: ComponentFixture<FormFieldTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldTextareaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
