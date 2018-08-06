import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleViewport } from './example-viewport';

describe('ExampleViewport', () => {
  let component: ExampleViewport;
  let fixture: ComponentFixture<ExampleViewport>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleViewport]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleViewport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
