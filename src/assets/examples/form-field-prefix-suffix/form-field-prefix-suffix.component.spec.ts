import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldPrefixSuffixComponentComponent } from './form-field-prefix-suffix.component';

describe('FormFieldPrefixSuffixComponentComponent', () => {
  let component: FormFieldPrefixSuffixComponentComponent;
  let fixture: ComponentFixture<FormFieldPrefixSuffixComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldPrefixSuffixComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldPrefixSuffixComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
