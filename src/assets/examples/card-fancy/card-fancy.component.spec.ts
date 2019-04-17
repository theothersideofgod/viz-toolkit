import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFancyComponentComponent } from './card-fancy.component';

describe('CardFancyComponentComponent', () => {
  let component: CardFancyComponentComponent;
  let fixture: ComponentFixture<CardFancyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardFancyComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFancyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
