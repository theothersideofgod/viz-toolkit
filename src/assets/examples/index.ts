import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonBasicComponent, ButtonBasicData } from './button-basic/button-basic.component';
import { DatePickerBasicComponent, DatePickerBasicData } from './date-picker-basic/date-picker-basic.component'
import { VizDateRangePickerMudule } from '../../../libs';

export const ALL_EXAMPLE_ITEMS = {
  'button-basic' : {
    component: ButtonBasicComponent,
    data: ButtonBasicData
  },
  'date-picker-basic' : {
    component: DatePickerBasicComponent,
    data: DatePickerBasicData
  }
}
@NgModule({
  declarations: [
    ButtonBasicComponent,
    DatePickerBasicComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    VizDateRangePickerMudule
  ],
  providers: [],
  entryComponents: [ButtonBasicComponent, DatePickerBasicComponent]
})
export class ExampleModule { }