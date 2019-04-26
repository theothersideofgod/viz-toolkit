import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelectionComponentComponent } from './table-selection.component';

describe('TableSelectionComponentComponent', () => {
  let component: TableSelectionComponentComponent;
  let fixture: ComponentFixture<TableSelectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableSelectionComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSelectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
