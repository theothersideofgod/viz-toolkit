import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontoggleSecondaryColorComponentComponent } from './buttontoggle-secondary-color.component';

describe('ButtontoggleSecondaryColorComponentComponent', () => {
  let component: ButtontoggleSecondaryColorComponentComponent;
  let fixture: ComponentFixture<ButtontoggleSecondaryColorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtontoggleSecondaryColorComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtontoggleSecondaryColorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
