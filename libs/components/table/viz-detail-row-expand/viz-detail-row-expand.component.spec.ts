import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizDetailRowExpandComponent } from './viz-detail-row-expand.component';

describe('VizDetailRowExpandComponent', () => {
  let component: VizDetailRowExpandComponent;
  let fixture: ComponentFixture<VizDetailRowExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizDetailRowExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizDetailRowExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
