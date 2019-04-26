import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormComponentComponent } from './select-form.component';

describe('SelectFormComponentComponent', () => {
  let component: SelectFormComponentComponent;
  let fixture: ComponentFixture<SelectFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFormComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
