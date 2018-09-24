import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavBasicComponent } from './sidenav-basic.component';
import { RouterTestingModule } from '@angular/router/testing';
import { VizSidenavModule } from 'libs';
import { MatIconModule } from '@angular/material';

describe('SidenavBasicComponent', () => {
  let component: SidenavBasicComponent;
  let fixture: ComponentFixture<SidenavBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, VizSidenavModule, MatIconModule],
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
