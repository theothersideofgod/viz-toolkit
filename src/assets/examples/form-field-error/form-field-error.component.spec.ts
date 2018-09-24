import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldErrorComponent } from './form-field-error.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormFieldErrorComponent', () => {
  let component: FormFieldErrorComponent;
  let fixture: ComponentFixture<FormFieldErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, FormsModule, MatInputModule, BrowserAnimationsModule, ReactiveFormsModule],
      declarations: [FormFieldErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
