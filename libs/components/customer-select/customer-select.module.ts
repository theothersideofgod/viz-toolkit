import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule
} from '@angular/material';
import { CustomerSelectComponent } from './customer-select.component';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [CustomerSelectComponent],
  declarations: [CustomerSelectComponent]
})
export class CustomerSelectModule {}
