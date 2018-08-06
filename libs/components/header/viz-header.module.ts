import { NgModule } from "@angular/core";
import { VizHeaderComponent } from './viz-header.component'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatBadgeModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatBadgeModule
  ],
  exports: [
    VizHeaderComponent,
  ],
  declarations: [
    VizHeaderComponent
  ],
})
export class VizHeaderMudule {}