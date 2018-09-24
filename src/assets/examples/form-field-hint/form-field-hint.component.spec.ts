import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldHintComponent } from './form-field-hint.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormFieldHintComponent', () => {
  let component: FormFieldHintComponent;
  let fixture: ComponentFixture<FormFieldHintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, FormsModule, MatInputModule, BrowserAnimationsModule],
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
