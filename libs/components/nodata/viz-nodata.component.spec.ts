import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizNodataComponent } from './viz-nodata.component';

describe('VizNodataComponent', () => {
  let component: VizNodataComponent;
  let fixture: ComponentFixture<VizNodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizNodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizNodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
