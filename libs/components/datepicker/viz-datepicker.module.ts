// import { MatDatepickerModule } from '@angular/material';

// export const VizDatepickerModule = MatDatepickerModule;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatDatepicker,
  MatDatepickerInput,
  MatInputModule,
  MatFormFieldControl,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatDatepickerModule],
  declarations: [],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepicker,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class VizDatepickerModule {}
