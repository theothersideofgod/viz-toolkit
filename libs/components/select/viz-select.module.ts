import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatFormFieldModule, MatListModule, MatMenuModule, MatInputModule, MatButtonModule } from '@angular/material';
import { VizSelectComponent } from "./viz-select.component";


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    VizSelectComponent
  ],
  declarations: [
    VizSelectComponent
  ],
})
export class VizSelectModule {}