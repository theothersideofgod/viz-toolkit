import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNoRippleComponentComponent } from './select-no-ripple.component';

describe('SelectNoRippleComponentComponent', () => {
  let component: SelectNoRippleComponentComponent;
  let fixture: ComponentFixture<SelectNoRippleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectNoRippleComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNoRippleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
