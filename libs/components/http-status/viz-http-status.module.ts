import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizHttpStatusComponent } from './viz-http-status.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [VizHttpStatusComponent],
  exports: [VizHttpStatusComponent]
})
export class VizHttpStatusModule {}
