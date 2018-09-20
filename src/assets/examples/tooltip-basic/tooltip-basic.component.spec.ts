import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipBasicComponent } from './tooltip-basic.component';
import { MatTooltipModule, MatIconModule } from '@angular/material';

describe('TooltipBasicComponent', () => {
  let component: TooltipBasicComponent;
  let fixture: ComponentFixture<TooltipBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTooltipModule, MatIconModule],
      declarations: [TooltipBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
