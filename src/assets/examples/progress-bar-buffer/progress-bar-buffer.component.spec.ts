import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarBufferComponentComponent } from './progress-bar-buffer.component';

describe('ProgressBarBufferComponentComponent', () => {
  let component: ProgressBarBufferComponentComponent;
  let fixture: ComponentFixture<ProgressBarBufferComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarBufferComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarBufferComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
