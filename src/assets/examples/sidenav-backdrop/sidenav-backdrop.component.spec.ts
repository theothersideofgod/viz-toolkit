import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavBackdropComponentComponent } from './sidenav-backdrop.component';

describe('SidenavBackdropComponentComponent', () => {
  let component: SidenavBackdropComponentComponent;
  let fixture: ComponentFixture<SidenavBackdropComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavBackdropComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavBackdropComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
