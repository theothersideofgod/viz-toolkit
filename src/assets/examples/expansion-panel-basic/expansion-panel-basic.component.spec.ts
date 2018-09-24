import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelBasicComponent } from './expansion-panel-basic.component';
import { VizTableModule } from 'libs';
import { MatIconModule } from '@angular/material';
import { VizExpandComponent } from 'libs/components/table/viz-expand/viz-expand.component';

describe('ExpansionPanelBasicComponent', () => {
  let component: ExpansionPanelBasicComponent;
  let fixture: ComponentFixture<ExpansionPanelBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [ExpansionPanelBasicComponent, VizExpandComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
