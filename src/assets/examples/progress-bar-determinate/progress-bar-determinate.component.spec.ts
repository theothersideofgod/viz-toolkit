import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarDeterminateComponentComponent } from './progress-bar-determinate.component';

describe('ProgressBarDeterminateComponentComponent', () => {
  let component: ProgressBarDeterminateComponentComponent;
  let fixture: ComponentFixture<ProgressBarDeterminateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarDeterminateComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarDeterminateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
