import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonBasicComponent } from './radio-button-basic.component';
import { MatRadioModule } from '@angular/material';

describe('RadioButtonBasicComponent', () => {
  let component: RadioButtonBasicComponent;
  let fixture: ComponentFixture<RadioButtonBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatRadioModule],
      declarations: [RadioButtonBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
