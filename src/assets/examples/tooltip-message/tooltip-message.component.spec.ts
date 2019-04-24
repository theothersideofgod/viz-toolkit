import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipMessageComponentComponent } from './tooltip-message.component';

describe('TooltipMessageComponentComponent', () => {
  let component: TooltipMessageComponentComponent;
  let fixture: ComponentFixture<TooltipMessageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipMessageComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
