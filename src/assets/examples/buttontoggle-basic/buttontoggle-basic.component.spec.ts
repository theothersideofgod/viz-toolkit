import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontoggleBasicComponentComponent } from './buttontoggle-basic.component';

describe('ButtontoggleBasicComponentComponent', () => {
  let component: ButtontoggleBasicComponentComponent;
  let fixture: ComponentFixture<ButtontoggleBasicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtontoggleBasicComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtontoggleBasicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
