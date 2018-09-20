import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldHintComponent } from './form-field-hint.component';

describe('FormFieldHintComponent', () => {
  let component: FormFieldHintComponent;
  let fixture: ComponentFixture<FormFieldHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldHintComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
