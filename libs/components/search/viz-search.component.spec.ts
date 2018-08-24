import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizSearchComponent } from './viz-search.component';

describe('VizSearchComponent', () => {
  let component: VizSearchComponent;
  let fixture: ComponentFixture<VizSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
