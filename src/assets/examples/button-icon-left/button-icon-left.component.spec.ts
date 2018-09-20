import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconLeftComponent } from './button-icon-left.component';

describe('ButtonIconLeftComponent', () => {
  let component: ButtonIconLeftComponent;
  let fixture: ComponentFixture<ButtonIconLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonIconLeftComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIconLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
