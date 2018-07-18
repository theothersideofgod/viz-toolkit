import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizButtonComponent } from './viz-button.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
  ],
  exports: [
    MatButtonModule
  ]
})
export class VizButtonModule {};
