import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeBasicComponent } from './badge-basic.component';

describe('BadgeBasicComponent', () => {
  let component: BadgeBasicComponent;
  let fixture: ComponentFixture<BadgeBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
