import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBasicComponent } from './menu-basic.component';
import { MatMenuModule } from '@angular/material';

describe('MenuBasicComponent', () => {
  let component: MenuBasicComponent;
  let fixture: ComponentFixture<MenuBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [MenuBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
