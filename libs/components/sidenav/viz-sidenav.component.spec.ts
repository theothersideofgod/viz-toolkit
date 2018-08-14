import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizSidenavComponent } from './viz-sidenav.component';

describe('VizSidenavComponent', () => {
  let component: VizSidenavComponent;
  let fixture: ComponentFixture<VizSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
