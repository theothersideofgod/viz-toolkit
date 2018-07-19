import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizTreeCellComponent } from './viz-tree-cell.component';

describe('VizTreeCellComponent', () => {
  let component: VizTreeCellComponent;
  let fixture: ComponentFixture<VizTreeCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizTreeCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizTreeCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
