import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeIconComponent } from './badge-icon.component';
import { MatIcon } from '@angular/material';

describe('BadgeIconComponent', () => {
  let component: BadgeIconComponent;
  let fixture: ComponentFixture<BadgeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeIconComponent, MatIcon]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
