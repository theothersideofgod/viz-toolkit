// import { MatTreeModule } from "@angular/material";
// export const VizTreeModule = MatTreeModule

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizTreeComponent } from './viz-tree.component';
import { VizTreeCellComponent } from './viz-tree-cell/viz-tree-cell.component';
import { MatIconModule, MatTreeModule } from '@angular/material';
import { VizTreeNodeDefDirective } from './viz-tree-node-def.directive';
import { VizTreeLeafDefDirective } from './viz-tree-leaf-def.directive';

@NgModule({
  imports: [CommonModule, MatIconModule],
  exports: [
    VizTreeComponent,
    VizTreeCellComponent,
    VizTreeNodeDefDirective,
    VizTreeLeafDefDirective,
    MatTreeModule
  ],
  declarations: [
    VizTreeComponent,
    VizTreeCellComponent,
    VizTreeNodeDefDirective,
    VizTreeLeafDefDirective
  ]
})
export class VizTreeModule {}
