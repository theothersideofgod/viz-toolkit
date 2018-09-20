import { NgModule } from '@angular/core';
import { VizHeaderComponent } from './viz-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatBadgeModule, MatMenuModule, MatRippleModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatRippleModule
  ],
  exports: [
    VizHeaderComponent,
  ],
  declarations: [
    VizHeaderComponent
  ],
})
export class VizHeaderModule {}
