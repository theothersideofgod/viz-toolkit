import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizMenuCellComponent } from './viz-menu-cell.component';

describe('VizMenuCellComponent', () => {
  let component: VizMenuCellComponent;
  let fixture: ComponentFixture<VizMenuCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizMenuCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizMenuCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
