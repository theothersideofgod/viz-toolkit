

import { NgModule } from '@angular/core';
import {
  MatFormFieldModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [MatFormFieldModule, FormsModule]
})
export class VizFormFieldModule {}
