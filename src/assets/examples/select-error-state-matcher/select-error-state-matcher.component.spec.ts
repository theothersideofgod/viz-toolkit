import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectErrorStateMatcherComponentComponent } from './select-error-state-matcher.component';

describe('SelectErrorStateMatcherComponentComponent', () => {
  let component: SelectErrorStateMatcherComponentComponent;
  let fixture: ComponentFixture<SelectErrorStateMatcherComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectErrorStateMatcherComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectErrorStateMatcherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
