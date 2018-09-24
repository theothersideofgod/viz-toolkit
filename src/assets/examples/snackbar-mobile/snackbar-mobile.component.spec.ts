import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarMobileComponent } from './snackbar-mobile.component';
import { MatSnackBarModule } from '@angular/material';

describe('SnackbarMobileComponent', () => {
  let component: SnackbarMobileComponent;
  let fixture: ComponentFixture<SnackbarMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
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
