import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelTableComponent } from './expansion-panel-table.component';
import { MatIconModule } from '@angular/material';
import { VizTableModule } from 'libs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ExpansionPanelTableComponent', () => {
  let component: ExpansionPanelTableComponent;
  let fixture: ComponentFixture<ExpansionPanelTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, VizTableModule, BrowserAnimationsModule],
      declarations: [ExpansionPanelTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionPanelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
