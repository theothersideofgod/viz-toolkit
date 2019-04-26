import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDynamicColumnsComponentComponent } from './table-dynamic-columns.component';

describe('TableDynamicColumnsComponentComponent', () => {
  let component: TableDynamicColumnsComponentComponent;
  let fixture: ComponentFixture<TableDynamicColumnsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableDynamicColumnsComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDynamicColumnsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
