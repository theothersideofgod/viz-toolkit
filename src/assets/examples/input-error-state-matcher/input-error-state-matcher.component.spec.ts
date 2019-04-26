import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorStateMatcherComponentComponent } from './input-error-state-matcher.component';

describe('InputErrorStateMatcherComponentComponent', () => {
  let component: InputErrorStateMatcherComponentComponent;
  let fixture: ComponentFixture<InputErrorStateMatcherComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputErrorStateMatcherComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorStateMatcherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
