import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipCustomClassComponentComponent } from './tooltip-custom-class.component';

describe('TooltipCustomClassComponentComponent', () => {
  let component: TooltipCustomClassComponentComponent;
  let fixture: ComponentFixture<TooltipCustomClassComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipCustomClassComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipCustomClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
