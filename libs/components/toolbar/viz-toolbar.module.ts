import { NgModule } from "@angular/core";
import { VizToolbarComponent } from './viz-toolbar.component'
import { CommonModule } from '@angular/common';
import { MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    VizToolbarComponent
  ],
  declarations: [
    VizToolbarComponent,
  ],
})
export class VizToolbarMudule {}