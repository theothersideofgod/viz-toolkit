import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldTextareaComponent } from './form-field-textarea.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormFieldTextareaComponent', () => {
  let component: FormFieldTextareaComponent;
  let fixture: ComponentFixture<FormFieldTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, FormsModule, MatInputModule, BrowserAnimationsModule],
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
