import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxConfigurableComponentComponent } from './checkbox-configurable.component';

describe('CheckboxConfigurableComponentComponent', () => {
  let component: CheckboxConfigurableComponentComponent;
  let fixture: ComponentFixture<CheckboxConfigurableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxConfigurableComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxConfigurableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
