import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonBasicComponent, ButtonBasicData } from './button-basic/button-basic.component';
import { VizDateRangePickerMudule, VizSelectModule } from '../../../libs';
import { DatePickerBasicComponent, DatePickerBasicData } from './date-picker-basic/date-picker-basic.component'
import { SelectBasicComponent, SelectBasicData } from './select-basic/select-basic.component'

export const ALL_EXAMPLE_ITEMS = {
  'button-basic' : {
    component: ButtonBasicComponent,
    data: ButtonBasicData
  },
  'date-picker-basic' : {
    component: DatePickerBasicComponent,
    data: DatePickerBasicData
  },
  'select-basic' : {
    component: SelectBasicComponent,
    data: SelectBasicData
  }
}
@NgModule({
  declarations: [
    ButtonBasicComponent,
    DatePickerBasicComponent,
    SelectBasicComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    VizDateRangePickerMudule,
    VizSelectModule,
  ],
  providers: [],
  entryComponents: [ButtonBasicComponent, DatePickerBasicComponent, SelectBasicComponent]
})
export class ExampleModule { }