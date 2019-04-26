import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAutosizeComponentComponent } from './sidenav-autosize.component';

describe('SidenavAutosizeComponentComponent', () => {
  let component: SidenavAutosizeComponentComponent;
  let fixture: ComponentFixture<SidenavAutosizeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavAutosizeComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavAutosizeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
