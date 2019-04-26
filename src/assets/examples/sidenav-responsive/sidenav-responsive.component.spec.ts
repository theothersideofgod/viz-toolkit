import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavResponsiveComponentComponent } from './sidenav-responsive.component';

describe('SidenavResponsiveComponentComponent', () => {
  let component: SidenavResponsiveComponentComponent;
  let fixture: ComponentFixture<SidenavResponsiveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavResponsiveComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavResponsiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
