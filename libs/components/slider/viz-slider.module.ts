
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizSliderComponent } from './viz-slider.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [VizSliderComponent],
  exports: [VizSliderComponent]
})
export class VizSliderModule {}
