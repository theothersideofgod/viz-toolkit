import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsheetBasicComponent } from './bottomsheet-basic.component';
import { MatNavList, MatBottomSheetRef, MatBottomSheetModule, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

describe('BottomsheetBasicComponent', () => {
  let component: BottomsheetBasicComponent;
  let fixture: ComponentFixture<BottomsheetBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatBottomSheetModule],
      declarations: [BottomsheetBasicComponent, MatNavList],
      providers: [
        { provide: MatBottomSheetRef, useValue: {} },
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} }
      ]
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


