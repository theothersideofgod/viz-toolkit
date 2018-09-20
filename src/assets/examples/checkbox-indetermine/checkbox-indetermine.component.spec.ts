import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxIndetermineComponent } from './checkbox-indetermine.component';

describe('CheckboxIndetermineComponent', () => {
  let component: CheckboxIndetermineComponent;
  let fixture: ComponentFixture<CheckboxIndetermineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxIndetermineComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxIndetermineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
