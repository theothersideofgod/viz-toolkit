import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilteringComponentComponent } from './table-filtering.component';

describe('TableFilteringComponentComponent', () => {
  let component: TableFilteringComponentComponent;
  let fixture: ComponentFixture<TableFilteringComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableFilteringComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilteringComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
