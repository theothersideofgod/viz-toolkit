import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderApplicationComponent } from './header-application.component';
import { VizHeaderModule } from 'libs';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderApplicationComponent', () => {
  let component: HeaderApplicationComponent;
  let fixture: ComponentFixture<HeaderApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizHeaderModule, RouterTestingModule],
      declarations: [HeaderApplicationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
