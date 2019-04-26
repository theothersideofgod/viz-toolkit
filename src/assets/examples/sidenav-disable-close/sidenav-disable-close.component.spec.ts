import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDisableCloseComponentComponent } from './sidenav-disable-close.component';

describe('SidenavDisableCloseComponentComponent', () => {
  let component: SidenavDisableCloseComponentComponent;
  let fixture: ComponentFixture<SidenavDisableCloseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavDisableCloseComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavDisableCloseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
