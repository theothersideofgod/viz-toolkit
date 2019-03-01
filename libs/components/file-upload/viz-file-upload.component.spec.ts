import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizFileUploadComponent } from './viz-file-upload.component';

describe('VizFileUploadComponent', () => {
  let component: VizFileUploadComponent;
  let fixture: ComponentFixture<VizFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
