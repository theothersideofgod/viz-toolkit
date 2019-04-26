import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDisabledComponentComponent } from './select-disabled.component';

describe('SelectDisabledComponentComponent', () => {
  let component: SelectDisabledComponentComponent;
  let fixture: ComponentFixture<SelectDisabledComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDisabledComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDisabledComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
