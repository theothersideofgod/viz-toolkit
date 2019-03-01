import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontoggleTwoIconComponentComponent } from './buttontoggle-two-icon.component';

describe('ButtontoggleTwoIconComponentComponent', () => {
  let component: ButtontoggleTwoIconComponentComponent;
  let fixture: ComponentFixture<ButtontoggleTwoIconComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtontoggleTwoIconComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtontoggleTwoIconComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
