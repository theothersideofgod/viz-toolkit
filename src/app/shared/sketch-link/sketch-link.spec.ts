import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchLink } from './sketch-link';

describe('SketchLinkComponent', () => {
  let component: SketchLink;
  let fixture: ComponentFixture<SketchLink>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchLink ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
