import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontoggleTwoTextComponentComponent } from './buttontoggle-two-text.component';

describe('ButtontoggleTwoTextComponentComponent', () => {
  let component: ButtontoggleTwoTextComponentComponent;
  let fixture: ComponentFixture<ButtontoggleTwoTextComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtontoggleTwoTextComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtontoggleTwoTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
