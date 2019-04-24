import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelectionComponentComponent } from './list-selection.component';

describe('ListSelectionComponentComponent', () => {
  let component: ListSelectionComponentComponent;
  let fixture: ComponentFixture<ListSelectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListSelectionComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSelectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
