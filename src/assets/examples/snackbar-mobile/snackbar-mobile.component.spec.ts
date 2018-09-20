import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarMobileComponent } from './snackbar-mobile.component';

describe('SnackbarMobileComponent', () => {
  let component: SnackbarMobileComponent;
  let fixture: ComponentFixture<SnackbarMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarMobileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
