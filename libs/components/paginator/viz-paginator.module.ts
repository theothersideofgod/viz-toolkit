import { NgModule } from '@angular/core';
import { MatPaginatorModule, MatTableModule } from '@angular/material';

@NgModule({
  exports: [MatPaginatorModule, MatTableModule]
})
export class VizPaginatorModule {}
