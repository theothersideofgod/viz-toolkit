import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { VizDetailRowExpandComponent } from './viz-detail-row-expand/viz-detail-row-expand.component';
import { VizExpandComponent } from './viz-expand/viz-expand.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  declarations: [VizDetailRowExpandComponent, VizExpandComponent],
  exports: [MatTableModule, VizDetailRowExpandComponent, VizExpandComponent]
})
export class VizTableModule {}
