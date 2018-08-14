import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizSidenavComponent } from './viz-sidenav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [VizSidenavComponent],
  exports: [VizSidenavComponent]
})
export class VizSidenavModule {}
