import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleOverviewComponentComponent } from './ripple-overview.component';

describe('RippleOverviewComponentComponent', () => {
  let component: RippleOverviewComponentComponent;
  let fixture: ComponentFixture<RippleOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RippleOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
