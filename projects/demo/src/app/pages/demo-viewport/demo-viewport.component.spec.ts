import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoViewportComponent } from './demo-viewport.component';

describe('DemoViewportComponent', () => {
  let component: DemoViewportComponent;
  let fixture: ComponentFixture<DemoViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
