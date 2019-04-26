import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFooterRowComponentComponent } from './table-footer-row.component';

describe('TableFooterRowComponentComponent', () => {
  let component: TableFooterRowComponentComponent;
  let fixture: ComponentFixture<TableFooterRowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableFooterRowComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFooterRowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
