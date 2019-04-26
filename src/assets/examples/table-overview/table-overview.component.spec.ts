import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOverviewComponentComponent } from './table-overview.component';

describe('TableOverviewComponentComponent', () => {
  let component: TableOverviewComponentComponent;
  let fixture: ComponentFixture<TableOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
