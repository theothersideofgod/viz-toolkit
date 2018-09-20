import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldDisableComponent } from './form-field-disable.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormFieldDisableComponent', () => {
  let component: FormFieldDisableComponent;
  let fixture: ComponentFixture<FormFieldDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, FormsModule, MatInputModule, BrowserAnimationsModule],
      declarations: [FormFieldDisableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
