import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizButtonComponent } from './viz-button.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    VizButtonComponent
  ],
  declarations: [
    VizButtonComponent
  ],
})
export class VizButtonModule { }

// export const VizButtonModule = MatButtonModule;
