import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowContextComponentComponent } from './table-row-context.component';

describe('TableRowContextComponentComponent', () => {
  let component: TableRowContextComponentComponent;
  let fixture: ComponentFixture<TableRowContextComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableRowContextComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowContextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
