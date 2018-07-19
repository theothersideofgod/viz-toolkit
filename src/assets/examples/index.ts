import { NgModule } from '@angular/core';
import { MaterialModule } from '../../app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as VizModules from 'libs';
import { ButtonBasicComponent, ButtonBasicData } from './button-basic/button-basic.component';
import { DatePickerBasicComponent, DatePickerBasicData } from './date-picker-basic/date-picker-basic.component'
import { SelectBasicComponent, SelectBasicData } from './select-basic/select-basic.component'
import { CheckboxBasicComponent, CheckboxBasicData } from './checkbox-basic/checkbox-basic.component';
import { MenuBasicComponent, MenuBasicData } from './menu-basic/menu-basic.component';
import { FormFieldBasicComponent, FormFieldBasicData } from './form-field-basic/form-field-basic.component';
import { RadioButtonBasicComponent, RadioButtonBasicData } from './radio-button-basic/radio-button-basic.component';
import { TreeBasicComponent, TreeBasicData } from './tree-basic/tree-basic.component';
import { SliderBasicComponent, SliderBasicData } from './slider-basic/slider-basic.component';
import { SlideToggleBasicComponent, SlideToggleBasicData } from './slide-toggle-basic/slide-toggle-basic.component';
import { ExpansionPanelBasicComponent, ExpansionPanelBasicData } from './expansion-panel-basic/expansion-panel-basic.component';
import { ToolbarBasicComponent, ToolbarBasicData } from './toolbar-basic/toolbar-basic.component';

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
  },
  'form-field-basic': {
    component: FormFieldBasicComponent,
    data: FormFieldBasicData
  },
  'radio-button-basic': {
    component: RadioButtonBasicComponent,
    data: RadioButtonBasicData
  },
  'tree-basic': {
    component: TreeBasicComponent,
    data: TreeBasicData
  },
  'slider-basic': {
    component: SliderBasicComponent,
    data: SliderBasicData
  },
  'slide-toggle-basic': {
    component: SlideToggleBasicComponent,
    data: SlideToggleBasicData
  },
  'expansion-panel-basic': {
    component: ExpansionPanelBasicComponent,
    data: ExpansionPanelBasicData
  },
  'toolbar-basic': {
    component: ToolbarBasicComponent,
    data: ToolbarBasicData
  }
}
@NgModule({
  declarations: [
    ButtonBasicComponent,
    DatePickerBasicComponent,
    SelectBasicComponent,
    CheckboxBasicComponent,
    MenuBasicComponent,
    FormFieldBasicComponent,
    RadioButtonBasicComponent,
    TreeBasicComponent,
    SliderBasicComponent,
    SlideToggleBasicComponent,
    ExpansionPanelBasicComponent,
    ToolbarBasicComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    ...(Object.keys(VizModules).map(i => VizModules[i])),
  ],
  providers: [],
  entryComponents: [
    ButtonBasicComponent, 
    DatePickerBasicComponent, 
    SelectBasicComponent, 
    CheckboxBasicComponent,
    MenuBasicComponent,
    FormFieldBasicComponent,
    RadioButtonBasicComponent,
    TreeBasicComponent,
    SliderBasicComponent,
    SlideToggleBasicComponent,
    ExpansionPanelBasicComponent,
    ToolbarBasicComponent,
  ]
})
export class ExampleModule { }