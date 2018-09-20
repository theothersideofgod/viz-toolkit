import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerBasicComponent } from './progress-spinner-basic.component';

describe('ProgressSpinnerBasicComponent', () => {
  let component: ProgressSpinnerBasicComponent;
  let fixture: ComponentFixture<ProgressSpinnerBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressSpinnerBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
