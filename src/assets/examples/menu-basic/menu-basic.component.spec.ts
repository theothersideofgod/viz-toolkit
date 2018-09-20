import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBasicComponent } from './menu-basic.component';

describe('MenuBasicComponent', () => {
  let component: MenuBasicComponent;
  let fixture: ComponentFixture<MenuBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
