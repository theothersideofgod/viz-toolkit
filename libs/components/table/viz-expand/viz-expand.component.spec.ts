import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizExpandComponent } from './viz-expand.component';

describe('VizExpandComponent', () => {
  let component: VizExpandComponent;
  let fixture: ComponentFixture<VizExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
