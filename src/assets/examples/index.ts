import { NgModule } from '@angular/core';
import { MaterialModule } from '../../app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonBasicComponent, ButtonBasicData } from './button-basic/button-basic.component';
import * as vizModules from '../../../libs';

import { DatePickerBasicComponent, DatePickerBasicData } from './date-picker-basic/date-picker-basic.component'
import { SelectBasicComponent, SelectBasicData } from './select-basic/select-basic.component'
import { CheckboxBasicComponent, CheckboxBasicData } from './checkbox-basic/checkbox-basic.component';
import { MenuBasicComponent, MenuBasicData } from './menu-basic/menu-basic.component';

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
  },
  'menu-basic': {
    component: MenuBasicComponent,
    data: MenuBasicData
  }
}
@NgModule({
  declarations: [
    ButtonBasicComponent,
    DatePickerBasicComponent,
    SelectBasicComponent,
    CheckboxBasicComponent,
    MenuBasicComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    ...(Object.keys(vizModules).map(i => vizModules[i])),
  ],
  providers: [],
  entryComponents: [
    ButtonBasicComponent, 
    DatePickerBasicComponent, 
    SelectBasicComponent, 
    CheckboxBasicComponent,
    MenuBasicComponent
  ]
})
export class ExampleModule { }