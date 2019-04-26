import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpandableRowsComponentComponent } from './table-expandable-rows.component';

describe('TableExpandableRowsComponentComponent', () => {
  let component: TableExpandableRowsComponentComponent;
  let fixture: ComponentFixture<TableExpandableRowsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableExpandableRowsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExpandableRowsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
