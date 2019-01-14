import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGroupOptionComponentComponent } from './select-group-option.component';

describe('SelectGroupOptionComponentComponent', () => {
  let component: SelectGroupOptionComponentComponent;
  let fixture: ComponentFixture<SelectGroupOptionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectGroupOptionComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGroupOptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
