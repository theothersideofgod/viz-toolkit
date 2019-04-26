import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavFixedComponentComponent } from './sidenav-fixed.component';

describe('SidenavFixedComponentComponent', () => {
  let component: SidenavFixedComponentComponent;
  let fixture: ComponentFixture<SidenavFixedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavFixedComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavFixedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
