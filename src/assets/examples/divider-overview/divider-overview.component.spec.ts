import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerOverviewComponentComponent } from './divider-overview.component';

describe('DividerOverviewComponentComponent', () => {
  let component: DividerOverviewComponentComponent;
  let fixture: ComponentFixture<DividerOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DividerOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
