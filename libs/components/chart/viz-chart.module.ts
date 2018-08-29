import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizChartComponent } from './viz-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VizChartComponent],
  exports: [VizChartComponent]
})
export class VizChartModule { }
