import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStickyColumnsComponentComponent } from './table-sticky-columns.component';

describe('TableStickyColumnsComponentComponent', () => {
  let component: TableStickyColumnsComponentComponent;
  let fixture: ComponentFixture<TableStickyColumnsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableStickyColumnsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStickyColumnsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
