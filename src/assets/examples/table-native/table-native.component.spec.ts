import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNativeComponent } from './table-native.component';
import { VizTableModule } from 'libs';
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TableNativeComponent', () => {
  let component: TableNativeComponent;
  let fixture: ComponentFixture<TableNativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizTableModule, MatIconModule, BrowserAnimationsModule],
      declarations: [TableNativeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
