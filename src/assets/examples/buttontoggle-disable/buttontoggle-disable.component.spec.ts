import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontoggleDisableComponentComponent } from './buttontoggle-disable.component';

describe('ButtontoggleDisableComponentComponent', () => {
  let component: ButtontoggleDisableComponentComponent;
  let fixture: ComponentFixture<ButtontoggleDisableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtontoggleDisableComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtontoggleDisableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
