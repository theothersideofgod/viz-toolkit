import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormComponentComponent } from './input-form.component';

describe('InputFormComponentComponent', () => {
  let component: InputFormComponentComponent;
  let fixture: ComponentFixture<InputFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputFormComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
