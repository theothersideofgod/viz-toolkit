import { NgModule } from '@angular/core';
import { VizDateRangePickerComponent } from './viz-date-range-picker.component';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatButtonModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PlatformModule } from '@angular/cdk/platform';
import { NativeDateAdapter } from './datetime/native-date-adapter';
import { DateAdapter } from './datetime/date-adapter';
import { MAT_DATE_FORMATS } from './datetime/date-formats';
import { MAT_NATIVE_DATE_FORMATS } from './datetime/native-date-formats';
import { SatCalendarBody } from './datepicker/calendar-body';
import { SatMonthView } from './datepicker/month-view';
import { SatMultiYearView } from './datepicker/multi-year-view';
import { SatYearView } from './datepicker/year-view';
import { SatCalendar, SatCalendarHeader } from './datepicker/calendar';
import { RangeCalendar } from './datepicker/range-calendar';
import {
  matRangeDatepickerContent,
  matRangeDatepicker
} from './datepicker/datepicker';
import { matRangeDatepickerInput } from './datepicker/datepicker-input';
import {
  matRangeDatepickerToggle,
  matRangeDatepickerToggleIcon
} from './datepicker/datepicker-toggle';
import { PortalModule } from '@angular/cdk/portal';
@NgModule({
  imports: [
    PlatformModule,
    CommonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    PortalModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    VizDateRangePickerComponent,
    SatCalendarBody,
    SatMonthView,
    SatMultiYearView,
    SatYearView,
    SatCalendar,
    SatCalendarHeader,
    RangeCalendar,
    matRangeDatepickerContent,
    matRangeDatepickerInput,
    matRangeDatepicker,
    matRangeDatepickerToggle,
    matRangeDatepickerToggleIcon
  ],
  declarations: [
    VizDateRangePickerComponent,
    SatCalendarBody,
    SatMonthView,
    SatMultiYearView,
    SatYearView,
    SatCalendar,
    SatCalendarHeader,
    RangeCalendar,
    matRangeDatepickerContent,
    matRangeDatepickerInput,
    matRangeDatepicker,
    matRangeDatepickerToggle,
    matRangeDatepickerToggleIcon
    // LastDaysPipe
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS }
  ],
  entryComponents: [matRangeDatepickerContent, SatCalendarHeader]
})
export class VizDateRangePickerModule {}
