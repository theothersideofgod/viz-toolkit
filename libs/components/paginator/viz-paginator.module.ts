import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [MatPaginatorModule, MatTableModule]
})
export class VizPaginatorModule {}
