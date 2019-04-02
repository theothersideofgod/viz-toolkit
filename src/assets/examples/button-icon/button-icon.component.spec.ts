import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconComponentComponent } from './button-icon.component';

describe('ButtonIconComponentComponent', () => {
  let component: ButtonIconComponentComponent;
  let fixture: ComponentFixture<ButtonIconComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonIconComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIconComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
