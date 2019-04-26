import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVizMultiHeaderComponentComponent } from './table-viz-multi-header.component';

describe('TableVizMultiHeaderComponentComponent', () => {
  let component: TableVizMultiHeaderComponentComponent;
  let fixture: ComponentFixture<TableVizMultiHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableVizMultiHeaderComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVizMultiHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
