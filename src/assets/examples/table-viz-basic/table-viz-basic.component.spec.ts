import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVizBasicComponentComponent } from './table-viz-basic.component';

describe('TableVizBasicComponentComponent', () => {
  let component: TableVizBasicComponentComponent;
  let fixture: ComponentFixture<TableVizBasicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableVizBasicComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVizBasicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
