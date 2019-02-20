import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'file-upload-basic',
  templateUrl: 'file-upload-basic.component.html',
  styleUrls: ['file-upload-basic.component.css'],
})
export class FileUploadBasicComponent implements OnInit {
  ngOnInit() { }
}

export const FileUploadBasicData = {
	name: 'FileUploadBasic'
}