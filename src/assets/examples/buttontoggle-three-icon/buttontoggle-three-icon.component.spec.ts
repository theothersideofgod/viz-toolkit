import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtontoggleThreeIconComponentComponent } from './buttontoggle-three-icon.component';

describe('ButtontoggleThreeIconComponentComponent', () => {
  let component: ButtontoggleThreeIconComponentComponent;
  let fixture: ComponentFixture<ButtontoggleThreeIconComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtontoggleThreeIconComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtontoggleThreeIconComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
