import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomTriggerComponentComponent } from './select-custom-trigger.component';

describe('SelectCustomTriggerComponentComponent', () => {
  let component: SelectCustomTriggerComponentComponent;
  let fixture: ComponentFixture<SelectCustomTriggerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCustomTriggerComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCustomTriggerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
