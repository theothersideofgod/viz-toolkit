import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarComponentComponentComponent } from './snack-bar-component.component';

describe('SnackBarComponentComponentComponent', () => {
  let component: SnackBarComponentComponentComponent;
  let fixture: ComponentFixture<SnackBarComponentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackBarComponentComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
