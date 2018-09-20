import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxIndetermineComponent } from './checkbox-indetermine.component';
import { MatCheckboxModule } from '@angular/material';

describe('CheckboxIndetermineComponent', () => {
  let component: CheckboxIndetermineComponent;
  let fixture: ComponentFixture<CheckboxIndetermineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckboxModule],
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
