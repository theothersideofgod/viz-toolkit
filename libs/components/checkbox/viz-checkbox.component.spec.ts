import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizCheckboxComponent } from './viz-checkbox.component';

describe('VizCheckboxComponent', () => {
  let component: VizCheckboxComponent;
  let fixture: ComponentFixture<VizCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
