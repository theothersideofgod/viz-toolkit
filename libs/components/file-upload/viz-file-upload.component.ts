import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'viz-file-upload',
  templateUrl: './viz-file-upload.component.html',
  styleUrls: ['./viz-file-upload.component.scss']
})
export class VizFileUploadComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload: ElementRef;
  @Input() multiple;
  @Input() url = 'http://localhost:3000/fileupload';
  @Input()
  httpRequestHeaders = new HttpHeaders();

  @Input()
  httpRequestParams = new HttpParams();

  @Input() fileAlias = 'file';

  filename = 'myfile.csv';
  isUploading = false;
  isUploadSuccess = false;
  isDragover = false;

  private fileUploadSubscription: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    console.log(this.fileUpload);
  }

  addFile() {
    this.fileUpload.nativeElement.click();
  }

  uploadFile(e) {
    this.sendFile(e.target.files);
  }

  sendFile(fileList) {
    const file = fileList[0];
    const formData = new FormData();
    formData.set('file', file, file.name);
    this.filename = file.name;
    this.fileUploadSubscription = this.httpClient
      .post(this.url, formData, {
        headers: this.httpRequestHeaders,
        params: this.httpRequestParams,
        observe: 'response',
        reportProgress: true,
        responseType: 'json'
      })
      .subscribe(
        response => {
          if (response.status === 200) {
            this.isUploading = false;
            this.isUploadSuccess = true;
            this.fileUpload.nativeElement.value = '';
          }
        },
        error => {}
      );
  }

  @HostListener('drop', [ '$event' ])
  public onDrop(event: any): any {
    const files = event.dataTransfer.files;
    this.sendFile(files);
    this.isDragover = false;
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragover', [ '$event' ])
  public onDropOver(event: any): any {
    this.isDragover = true;
      event.preventDefault();
      event.stopPropagation();
  }

  @HostListener('dragleave', [ '$event' ])
  public onDropLeave(event: any): any {
    this.isDragover = false;
      event.preventDefault();
      event.stopPropagation();
  }
}
