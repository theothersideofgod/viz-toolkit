import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizBreadcrumbComponent } from './viz-breadcrumb.component';

describe('VizBreadcrumbComponent', () => {
  let component: VizBreadcrumbComponent;
  let fixture: ComponentFixture<VizBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
