

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [MatFormFieldModule, FormsModule]
})
export class VizFormFieldModule {}
