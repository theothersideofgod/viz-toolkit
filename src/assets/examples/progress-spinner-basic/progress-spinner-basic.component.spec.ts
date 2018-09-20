import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerBasicComponent } from './progress-spinner-basic.component';
import { MatProgressSpinnerModule } from '@angular/material';

describe('ProgressSpinnerBasicComponent', () => {
  let component: ProgressSpinnerBasicComponent;
  let fixture: ComponentFixture<ProgressSpinnerBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule],
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
