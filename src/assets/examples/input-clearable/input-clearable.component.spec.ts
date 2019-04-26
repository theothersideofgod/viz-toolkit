import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputClearableComponentComponent } from './input-clearable.component';

describe('InputClearableComponentComponent', () => {
  let component: InputClearableComponentComponent;
  let fixture: ComponentFixture<InputClearableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputClearableComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputClearableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
