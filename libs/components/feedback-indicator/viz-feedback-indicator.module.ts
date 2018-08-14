import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizFeedbackIndicatorComponent } from './viz-feedback-indicator.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [VizFeedbackIndicatorComponent],
  exports: [VizFeedbackIndicatorComponent]
})
export class VizFeedbackIndicatorModule {}
