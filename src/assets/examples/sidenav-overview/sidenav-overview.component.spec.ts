import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavOverviewComponentComponent } from './sidenav-overview.component';

describe('SidenavOverviewComponentComponent', () => {
  let component: SidenavOverviewComponentComponent;
  let fixture: ComponentFixture<SidenavOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
