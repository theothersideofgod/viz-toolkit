import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VizCheckboxComponent } from './viz-checkbox.component';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatCheckboxModule],
  exports: [VizCheckboxComponent],
  declarations: [VizCheckboxComponent]
})
export class VizCheckboxModule {}
