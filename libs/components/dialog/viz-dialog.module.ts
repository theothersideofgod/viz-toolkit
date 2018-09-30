import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [MatDialogModule],
  providers: [MatDialog]
})
export class VizDialogModule {}
