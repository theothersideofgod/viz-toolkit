import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRaisedComponentComponent } from './button-raised.component';

describe('ButtonRaisedComponentComponent', () => {
  let component: ButtonRaisedComponentComponent;
  let fixture: ComponentFixture<ButtonRaisedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonRaisedComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRaisedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
