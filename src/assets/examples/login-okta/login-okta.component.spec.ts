import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOktaComponentComponent } from './login-okta.component';

describe('LoginOktaComponentComponent', () => {
  let component: LoginOktaComponentComponent;
  let fixture: ComponentFixture<LoginOktaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginOktaComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOktaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
