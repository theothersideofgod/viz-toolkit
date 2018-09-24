import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBasicComponent } from './login-basic.component';
import { VizLoginModule } from 'libs';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginBasicComponent', () => {
  let component: LoginBasicComponent;
  let fixture: ComponentFixture<LoginBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizLoginModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [LoginBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
