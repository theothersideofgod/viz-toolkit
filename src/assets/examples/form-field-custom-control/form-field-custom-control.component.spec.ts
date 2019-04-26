import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldCustomControlComponentComponent } from './form-field-custom-control.component';

describe('FormFieldCustomControlComponentComponent', () => {
  let component: FormFieldCustomControlComponentComponent;
  let fixture: ComponentFixture<FormFieldCustomControlComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldCustomControlComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldCustomControlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
