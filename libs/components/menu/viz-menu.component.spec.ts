import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizMenuComponent } from './viz-menu.component';

describe('VizMenuComponent', () => {
  let component: VizMenuComponent;
  let fixture: ComponentFixture<VizMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
