import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { VizSearchComponent } from './viz-search.component';
@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],

  declarations: [VizSearchComponent],
  exports: [VizSearchComponent]
})
export class VizSearchModule {}
