import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIconComponentComponent } from './menu-icon.component';

describe('MenuIconComponentComponent', () => {
  let component: MenuIconComponentComponent;
  let fixture: ComponentFixture<MenuIconComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuIconComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIconComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
