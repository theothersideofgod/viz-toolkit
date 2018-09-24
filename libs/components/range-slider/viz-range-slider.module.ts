import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizRangeSliderComponent } from './viz-range-slider.component';
import { MatSliderModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatSliderModule, FormsModule],
  declarations: [VizRangeSliderComponent],
  exports: [VizRangeSliderComponent]
})
export class VizRangeSliderModule {}
