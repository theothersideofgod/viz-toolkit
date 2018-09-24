import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxBasicComponent } from './checkbox-basic.component';
import { MatCheckboxModule } from '@angular/material';

describe('CheckboxBasicComponent', () => {
  let component: CheckboxBasicComponent;
  let fixture: ComponentFixture<CheckboxBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckboxModule],
      declarations: [CheckboxBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
