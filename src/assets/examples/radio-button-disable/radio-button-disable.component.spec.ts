import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonDisableComponent } from './radio-button-disable.component';
import { MatRadioModule } from '@angular/material';

describe('RadioButtonDisableComponent', () => {
  let component: RadioButtonDisableComponent;
  let fixture: ComponentFixture<RadioButtonDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatRadioModule],
      declarations: [RadioButtonDisableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
