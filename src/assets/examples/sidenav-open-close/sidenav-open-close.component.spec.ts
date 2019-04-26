import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavOpenCloseComponentComponent } from './sidenav-open-close.component';

describe('SidenavOpenCloseComponentComponent', () => {
  let component: SidenavOpenCloseComponentComponent;
  let fixture: ComponentFixture<SidenavOpenCloseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavOpenCloseComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavOpenCloseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
