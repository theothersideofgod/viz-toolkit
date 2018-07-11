import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizSelectComponent } from './viz-select.component';

describe('VizSelectComponent', () => {
  let component: VizSelectComponent;
  let fixture: ComponentFixture<VizSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
