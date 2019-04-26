import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortingComponentComponent } from './table-sorting.component';

describe('TableSortingComponentComponent', () => {
  let component: TableSortingComponentComponent;
  let fixture: ComponentFixture<TableSortingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableSortingComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSortingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
