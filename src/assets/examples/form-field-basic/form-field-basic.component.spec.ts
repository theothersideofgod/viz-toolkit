import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldBasicComponent } from './form-field-basic.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormFieldBasicComponent', () => {
  let component: FormFieldBasicComponent;
  let fixture: ComponentFixture<FormFieldBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, FormsModule, MatInputModule, BrowserAnimationsModule],
      declarations: [FormFieldBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
