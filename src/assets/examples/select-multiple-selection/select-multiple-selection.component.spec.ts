import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultipleSelectionComponent } from './select-multiple-selection.component';

describe('SelectMultipleSelectionComponent', () => {
  let component: SelectMultipleSelectionComponent;
  let fixture: ComponentFixture<SelectMultipleSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectMultipleSelectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMultipleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
