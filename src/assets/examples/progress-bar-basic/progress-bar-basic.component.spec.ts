import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarBasicComponent } from './progress-bar-basic.component';

describe('ProgressBarBasicComponent', () => {
  let component: ProgressBarBasicComponent;
  let fixture: ComponentFixture<ProgressBarBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
