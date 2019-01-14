import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectErrorStateComponentComponent } from './select-error-state.component';

describe('SelectErrorStateComponentComponent', () => {
  let component: SelectErrorStateComponentComponent;
  let fixture: ComponentFixture<SelectErrorStateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectErrorStateComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectErrorStateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
