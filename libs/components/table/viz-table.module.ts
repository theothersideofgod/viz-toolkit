import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatSortModule
} from '@angular/material';
import { VizExpandComponent } from './viz-expand/viz-expand.component';
import { VizShowExpandComponent } from './viz-show-expand/viz-show-expand.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  declarations: [VizExpandComponent, VizShowExpandComponent],
  exports: [
    MatTableModule,
    VizExpandComponent,
    VizShowExpandComponent,
    MatSortModule
  ]
})
export class VizTableModule {}
