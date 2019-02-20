import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizLoginOktaComponent } from './viz-login-okta.component';

describe('VizLoginOktaComponent', () => {
  let component: VizLoginOktaComponent;
  let fixture: ComponentFixture<VizLoginOktaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizLoginOktaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizLoginOktaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
