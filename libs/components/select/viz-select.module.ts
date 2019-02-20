import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatSelect
} from '@angular/material';


@NgModule({
  imports: [CommonModule],
  exports: [MatSelectModule, MatSelectModule],
  declarations: []
})
export class VizSelectModule {}
