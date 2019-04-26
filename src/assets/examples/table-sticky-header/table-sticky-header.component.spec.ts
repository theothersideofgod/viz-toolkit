import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStickyHeaderComponentComponent } from './table-sticky-header.component';

describe('TableStickyHeaderComponentComponent', () => {
  let component: TableStickyHeaderComponentComponent;
  let fixture: ComponentFixture<TableStickyHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableStickyHeaderComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStickyHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
