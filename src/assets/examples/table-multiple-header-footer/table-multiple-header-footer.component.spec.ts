import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMultipleHeaderFooterComponentComponent } from './table-multiple-header-footer.component';

describe('TableMultipleHeaderFooterComponentComponent', () => {
  let component: TableMultipleHeaderFooterComponentComponent;
  let fixture: ComponentFixture<TableMultipleHeaderFooterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableMultipleHeaderFooterComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMultipleHeaderFooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
