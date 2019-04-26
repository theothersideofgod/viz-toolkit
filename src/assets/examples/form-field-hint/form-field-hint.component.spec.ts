import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldHintComponentComponent } from './form-field-hint.component';

describe('FormFieldHintComponentComponent', () => {
  let component: FormFieldHintComponentComponent;
  let fixture: ComponentFixture<FormFieldHintComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldHintComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldHintComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
