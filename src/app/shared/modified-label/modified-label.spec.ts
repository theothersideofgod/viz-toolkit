import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedLabel } from './modified-label';

describe('ModifiedLabel', () => {
  let component: ModifiedLabel;
  let fixture: ComponentFixture<ModifiedLabel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiedLabel ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiedLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
