import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBasicComponent } from './card-basic.component';
import { MatCardModule } from '@angular/material';
describe('CardBasicComponent', () => {
  let component: CardBasicComponent;
  let fixture: ComponentFixture<CardBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [CardBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
