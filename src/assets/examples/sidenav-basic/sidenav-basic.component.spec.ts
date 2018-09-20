import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavBasicComponent } from './sidenav-basic.component';

describe('SidenavBasicComponent', () => {
  let component: SidenavBasicComponent;
  let fixture: ComponentFixture<SidenavBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
