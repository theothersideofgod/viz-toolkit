import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadBasicComponentComponent } from './file-upload-basic.component';

describe('FileUploadBasicComponentComponent', () => {
  let component: FileUploadBasicComponentComponent;
  let fixture: ComponentFixture<FileUploadBasicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FileUploadBasicComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadBasicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
