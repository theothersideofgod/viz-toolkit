import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFloatingMiniComponentComponent } from './button-floating-mini.component';

describe('ButtonFloatingMiniComponentComponent', () => {
  let component: ButtonFloatingMiniComponentComponent;
  let fixture: ComponentFixture<ButtonFloatingMiniComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonFloatingMiniComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFloatingMiniComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
