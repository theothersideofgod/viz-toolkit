import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDisableComponent } from './checkbox-disable.component';

describe('CheckboxDisableComponent', () => {
  let component: CheckboxDisableComponent;
  let fixture: ComponentFixture<CheckboxDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxDisableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
