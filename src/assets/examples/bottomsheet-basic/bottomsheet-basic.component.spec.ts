import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsheetBasicComponent } from './bottomsheet-basic.component';

describe('BottomsheetBasicComponent', () => {
  let component: BottomsheetBasicComponent;
  let fixture: ComponentFixture<BottomsheetBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BottomsheetBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomsheetBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
