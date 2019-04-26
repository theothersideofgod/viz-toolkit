import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVizDifferElementComponentComponent } from './table-viz-differ-element.component';

describe('TableVizDifferElementComponentComponent', () => {
  let component: TableVizDifferElementComponentComponent;
  let fixture: ComponentFixture<TableVizDifferElementComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableVizDifferElementComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVizDifferElementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
