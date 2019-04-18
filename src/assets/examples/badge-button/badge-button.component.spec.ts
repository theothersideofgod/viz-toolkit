import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeButtonComponentComponent } from './badge-button.component';

describe('BadgeButtonComponentComponent', () => {
  let component: BadgeButtonComponentComponent;
  let fixture: ComponentFixture<BadgeButtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeButtonComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
