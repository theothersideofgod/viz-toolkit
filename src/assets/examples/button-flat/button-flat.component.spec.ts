import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFlatComponentComponent } from './button-flat.component';

describe('ButtonFlatComponentComponent', () => {
  let component: ButtonFlatComponentComponent;
  let fixture: ComponentFixture<ButtonFlatComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonFlatComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFlatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
