import { NgModule } from "@angular/core";
import { VizLoginComponent } from './viz-login.component'
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    VizLoginComponent,
  ],
  declarations: [
    VizLoginComponent
  ],
})
export class VizLoginMudule {}