import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarBasicComponent } from './snackbar-basic.component';

describe('SnackbarBasicComponent', () => {
  let component: SnackbarBasicComponent;
  let fixture: ComponentFixture<SnackbarBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
