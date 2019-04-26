import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldThemingComponentComponent } from './form-field-theming.component';

describe('FormFieldThemingComponentComponent', () => {
  let component: FormFieldThemingComponentComponent;
  let fixture: ComponentFixture<FormFieldThemingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldThemingComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldThemingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
