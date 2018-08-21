import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizSteppersComponent } from './viz-steppers.component';

describe('VizSteppersComponent', () => {
  let component: VizSteppersComponent;
  let fixture: ComponentFixture<VizSteppersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizSteppersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizSteppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
