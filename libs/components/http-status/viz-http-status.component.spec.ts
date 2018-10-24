import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizHttpStatusComponent } from './viz-http-status.component';

describe('VizHttpStatusComponent', () => {
  let component: VizHttpStatusComponent;
  let fixture: ComponentFixture<VizHttpStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizHttpStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizHttpStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
