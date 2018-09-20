import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconRightComponent } from './button-icon-right.component';

describe('ButtonIconRightComponent', () => {
  let component: ButtonIconRightComponent;
  let fixture: ComponentFixture<ButtonIconRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonIconRightComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIconRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
