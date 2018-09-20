import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonBasicComponent } from './radio-button-basic.component';

describe('RadioButtonBasicComponent', () => {
  let component: RadioButtonBasicComponent;
  let fixture: ComponentFixture<RadioButtonBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
