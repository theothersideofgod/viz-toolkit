import { NgModule } from '@angular/core';
import { VizFooterComponent } from './viz-footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    VizFooterComponent
  ],
  declarations: [
    VizFooterComponent
  ],
})
export class VizFooterModule {}
