import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultipleComponentComponent } from './select-multiple.component';

describe('SelectMultipleComponentComponent', () => {
  let component: SelectMultipleComponentComponent;
  let fixture: ComponentFixture<SelectMultipleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectMultipleComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultipleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
