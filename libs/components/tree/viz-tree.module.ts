// import { MatTreeModule } from "@angular/material";
// export const VizTreeModule = MatTreeModule

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizTreeComponent } from './viz-tree.component';
import { VizTreeCellComponent } from './viz-tree-cell/viz-tree-cell.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatIconModule],
  exports: [VizTreeComponent, VizTreeCellComponent],
  declarations: [VizTreeComponent, VizTreeCellComponent]
})
export class VizTreeModule {}
