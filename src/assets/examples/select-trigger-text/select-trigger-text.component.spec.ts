import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTriggerTextComponentComponent } from './select-trigger-text.component';

describe('SelectTriggerTextComponentComponent', () => {
  let component: SelectTriggerTextComponentComponent;
  let fixture: ComponentFixture<SelectTriggerTextComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTriggerTextComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTriggerTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
