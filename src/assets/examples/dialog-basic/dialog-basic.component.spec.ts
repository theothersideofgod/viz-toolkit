import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBasicComponent } from './dialog-basic.component';
import { VizChartModule } from 'libs';
import { MatDialogModule } from '@angular/material';

describe('DialogBasicComponent', () => {
  let component: DialogBasicComponent;
  let fixture: ComponentFixture<DialogBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VizChartModule, MatDialogModule],
      declarations: [DialogBasicComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
