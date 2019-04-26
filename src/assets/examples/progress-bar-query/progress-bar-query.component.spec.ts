import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarQueryComponentComponent } from './progress-bar-query.component';

describe('ProgressBarQueryComponentComponent', () => {
  let component: ProgressBarQueryComponentComponent;
  let fixture: ComponentFixture<ProgressBarQueryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarQueryComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarQueryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
