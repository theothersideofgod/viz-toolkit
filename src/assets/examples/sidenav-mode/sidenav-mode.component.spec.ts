import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavModeComponentComponent } from './sidenav-mode.component';

describe('SidenavModeComponentComponent', () => {
  let component: SidenavModeComponentComponent;
  let fixture: ComponentFixture<SidenavModeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavModeComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavModeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
