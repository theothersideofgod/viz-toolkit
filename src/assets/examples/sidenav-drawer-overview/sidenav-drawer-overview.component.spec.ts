import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDrawerOverviewComponentComponent } from './sidenav-drawer-overview.component';

describe('SidenavDrawerOverviewComponentComponent', () => {
  let component: SidenavDrawerOverviewComponentComponent;
  let fixture: ComponentFixture<SidenavDrawerOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavDrawerOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavDrawerOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
