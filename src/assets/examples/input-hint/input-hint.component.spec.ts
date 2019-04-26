import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHintComponentComponent } from './input-hint.component';

describe('InputHintComponentComponent', () => {
  let component: InputHintComponentComponent;
  let fixture: ComponentFixture<InputHintComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputHintComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputHintComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
