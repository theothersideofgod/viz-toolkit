import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNestedComponent } from './menu-nested.component';
import { MatMenuModule } from '@angular/material';

describe('MenuNestedComponent', () => {
  let component: MenuNestedComponent;
  let fixture: ComponentFixture<MenuNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [MenuNestedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
