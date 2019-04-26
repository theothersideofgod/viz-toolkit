import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldAppearanceComponentComponent } from './form-field-appearance.component';

describe('FormFieldAppearanceComponentComponent', () => {
  let component: FormFieldAppearanceComponentComponent;
  let fixture: ComponentFixture<FormFieldAppearanceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldAppearanceComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldAppearanceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
