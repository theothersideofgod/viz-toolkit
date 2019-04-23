import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarOverviewComponentComponent } from './snack-bar-overview.component';

describe('SnackBarOverviewComponentComponent', () => {
  let component: SnackBarOverviewComponentComponent;
  let fixture: ComponentFixture<SnackBarOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackBarOverviewComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
