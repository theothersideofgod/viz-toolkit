import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizFileUploadComponent } from './viz-file-upload.component';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [VizFileUploadComponent],
  exports: [VizFileUploadComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class VizFileUploadModule { }
