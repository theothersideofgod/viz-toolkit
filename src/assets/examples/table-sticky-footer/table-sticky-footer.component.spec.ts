import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStickyFooterComponentComponent } from './table-sticky-footer.component';

describe('TableStickyFooterComponentComponent', () => {
  let component: TableStickyFooterComponentComponent;
  let fixture: ComponentFixture<TableStickyFooterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableStickyFooterComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStickyFooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
