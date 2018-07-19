import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizTreeComponent } from './viz-tree.component';

describe('VizTreeComponent', () => {
  let component: VizTreeComponent;
  let fixture: ComponentFixture<VizTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
