import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarIndeterminateComponentComponent } from './progress-bar-indeterminate.component';

describe('ProgressBarIndeterminateComponentComponent', () => {
  let component: ProgressBarIndeterminateComponentComponent;
  let fixture: ComponentFixture<ProgressBarIndeterminateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarIndeterminateComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarIndeterminateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
