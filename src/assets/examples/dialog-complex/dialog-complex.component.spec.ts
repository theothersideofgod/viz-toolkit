import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComplexComponentComponent } from './dialog-complex.component';

describe('DialogComplexComponentComponent', () => {
  let component: DialogComplexComponentComponent;
  let fixture: ComponentFixture<DialogComplexComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComplexComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComplexComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
