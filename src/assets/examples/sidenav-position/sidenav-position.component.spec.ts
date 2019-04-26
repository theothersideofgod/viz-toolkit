import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavPositionComponentComponent } from './sidenav-position.component';

describe('SidenavPositionComponentComponent', () => {
  let component: SidenavPositionComponentComponent;
  let fixture: ComponentFixture<SidenavPositionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavPositionComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavPositionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
