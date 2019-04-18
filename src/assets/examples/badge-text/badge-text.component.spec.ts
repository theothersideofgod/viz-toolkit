import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeTextComponentComponent } from './badge-text.component';

describe('BadgeTextComponentComponent', () => {
  let component: BadgeTextComponentComponent;
  let fixture: ComponentFixture<BadgeTextComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeTextComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
