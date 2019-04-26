import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarConfigurableComponentComponent } from './progress-bar-configurable.component';

describe('ProgressBarConfigurableComponentComponent', () => {
  let component: ProgressBarConfigurableComponentComponent;
  let fixture: ComponentFixture<ProgressBarConfigurableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarConfigurableComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarConfigurableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
