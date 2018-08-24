import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { VizBreadcrumbComponent } from './viz-breadcrumb.component';

@NgModule({
  imports: [CommonModule, MatIconModule, RouterModule],
  declarations: [VizBreadcrumbComponent],
  exports: [VizBreadcrumbComponent]
})
export class VizBreadcrumbModule {}
