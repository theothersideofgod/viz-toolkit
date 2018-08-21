import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizShowExpandComponent } from './viz-show-expand.component';

describe('VizShowExpandComponent', () => {
  let component: VizShowExpandComponent;
  let fixture: ComponentFixture<VizShowExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizShowExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizShowExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
