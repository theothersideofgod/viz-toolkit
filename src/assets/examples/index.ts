import { NgModule } from '@angular/core';
import { MaterialModule } from '../../app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonBasicComponent, ButtonBasicData } from './button-basic/button-basic.component';
import { VizDateRangePickerMudule, VizSelectModule, VizCheckboxModule } from '../../../libs';
import { DatePickerBasicComponent, DatePickerBasicData } from './date-picker-basic/date-picker-basic.component'
import { SelectBasicComponent, SelectBasicData } from './select-basic/select-basic.component'
import { CheckboxBasicComponent, CheckboxBasicData } from './checkbox-basic/checkbox-basic.component';

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
  },
  'checkbox-basic' : {
    component: CheckboxBasicComponent,
    data: CheckboxBasicData
  }
}
@NgModule({
  declarations: [
    ButtonBasicComponent,
    DatePickerBasicComponent,
    SelectBasicComponent,
    CheckboxBasicComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    VizDateRangePickerMudule,
    VizSelectModule,
    VizCheckboxModule
  ],
  providers: [],
  entryComponents: [
    ButtonBasicComponent, 
    DatePickerBasicComponent, 
    SelectBasicComponent, 
    CheckboxBasicComponent]
})
export class ExampleModule { }