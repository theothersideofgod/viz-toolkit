import { NgModule } from "@angular/core";
import { VizDateRangePickerComponent } from './viz-date-range-picker.component'
import { CommonModule } from '@angular/common';
import { MatIconModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatRangeDatepickerModule, MatRangeNativeDateModule } from "mat-range-datepicker";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    MatRangeDatepickerModule, 
    MatRangeNativeDateModule
  ],
  exports: [
    VizDateRangePickerComponent
  ],
  declarations: [
    VizDateRangePickerComponent,
    // LastDaysPipe
  ],
})
export class VizDateRangePickerMudule {}