import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStepperComponent } from './custom-stepper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomStepperComponent],
  exports: [CustomStepperComponent]
})
export class CustomStepperModule {}
