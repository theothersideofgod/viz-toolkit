import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizSteppersComponent } from './viz-steppers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VizSteppersComponent],
  exports: [VizSteppersComponent]
})
export class VizSteppersModule { }
