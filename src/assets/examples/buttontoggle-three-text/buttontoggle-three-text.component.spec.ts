import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontoggleThreeTextComponentComponent } from './buttontoggle-three-text.component';

describe('ButtontoggleThreeTextComponentComponent', () => {
  let component: ButtontoggleThreeTextComponentComponent;
  let fixture: ComponentFixture<ButtontoggleThreeTextComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtontoggleThreeTextComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtontoggleThreeTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
