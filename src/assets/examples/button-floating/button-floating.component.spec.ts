import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFloatingComponentComponent } from './button-floating.component';

describe('ButtonFloatingComponentComponent', () => {
  let component: ButtonFloatingComponentComponent;
  let fixture: ComponentFixture<ButtonFloatingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonFloatingComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFloatingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
