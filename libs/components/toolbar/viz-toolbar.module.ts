import { NgModule } from "@angular/core";
import { VizToolbarComponent } from './viz-toolbar.component'
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    VizToolbarComponent
  ],
  declarations: [
    VizToolbarComponent
  ],
})
export class VizToolbarMudule {}