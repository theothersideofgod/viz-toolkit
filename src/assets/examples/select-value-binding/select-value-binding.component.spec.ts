import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectValueBindingComponentComponent } from './select-value-binding.component';

describe('SelectValueBindingComponentComponent', () => {
  let component: SelectValueBindingComponentComponent;
  let fixture: ComponentFixture<SelectValueBindingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectValueBindingComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectValueBindingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
