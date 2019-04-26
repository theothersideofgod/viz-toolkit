import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldAutosizeTextareaComponentComponent } from './text-field-autosize-textarea.component';

describe('TextFieldAutosizeTextareaComponentComponent', () => {
  let component: TextFieldAutosizeTextareaComponentComponent;
  let fixture: ComponentFixture<TextFieldAutosizeTextareaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextFieldAutosizeTextareaComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldAutosizeTextareaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
