import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconLeftComponent } from './button-icon-left.component';
import { MatIconModule } from '@angular/material';


describe('ButtonIconLeftComponent', () => {
  let component: ButtonIconLeftComponent;
  let fixture: ComponentFixture<ButtonIconLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [ButtonIconLeftComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIconLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
