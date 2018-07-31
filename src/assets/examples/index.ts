import { NgModule } from '@angular/core';
import { MaterialModule } from '../../app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as VizModules from 'libs'
import { ChipPrimaryComponent, ChipPrimaryData } from './chip-primary/chip-primary.component';
import { ListNodividerComponent, ListNodividerData } from './list-nodivider/list-nodivider.component';
import { MenuNestedComponent, MenuNestedData } from './menu-nested/menu-nested.component';
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
import { IconBasicComponent, IconBasicData } from './icon-basic/icon-basic.component';
import { ExpansionPanelBasicComponent, ExpansionPanelBasicData } from './expansion-panel-basic/expansion-panel-basic.component';
import { ToolbarBasicComponent, ToolbarBasicData } from './toolbar-basic/toolbar-basic.component';
import { ListBasicComponent, ListBasicData } from './list-basic/list-basic.component';
import { ChipBasicComponent, ChipBasicData } from './chip-basic/chip-basic.component';
import { BadgeBasicComponent, BadgeBasicData } from './badge-basic/badge-basic.component';
import { ProgressBarBasicComponent, ProgressBarBasicData } from './progress-bar-basic/progress-bar-basic.component';
import { HeaderFooterBasicComponent, HeaderFooterBasicData } from './header-footer-basic/header-footer-basic.component'



export const ALL_EXAMPLE_ITEMS = {
  'chip-primary' : {
    component: ChipPrimaryComponent,
    data: ChipPrimaryData
  },
  'list-nodivider' : {
    component: ListNodividerComponent,
    data: ListNodividerData
  },
  'menu-nested' : {
    component: MenuNestedComponent,
    data: MenuNestedData
  },
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
  'icon-basic': {
    component: IconBasicComponent,
    data: IconBasicData
  },
  'expansion-panel-basic': {
    component: ExpansionPanelBasicComponent,
    data: ExpansionPanelBasicData
  },
  'toolbar-basic': {
    component: ToolbarBasicComponent,
    data: ToolbarBasicData
  },
  'list-basic': {
    component: ListBasicComponent,
    data: ListBasicData
  },
  'chip-basic': {
    component: ChipBasicComponent,
    data: ChipBasicData
  },
  'badge-basic': {
    component: BadgeBasicComponent,
    data: BadgeBasicData
  },
  'progress-bar-basic': {
    component: ProgressBarBasicComponent,
    data: ProgressBarBasicData
  },
  'header-footer-basic': {
    component: HeaderFooterBasicComponent,
    data: HeaderFooterBasicData
  }
}
@NgModule({
  declarations: [
    ChipPrimaryComponent,
    ListNodividerComponent,
    MenuNestedComponent,
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
    IconBasicComponent,
    ExpansionPanelBasicComponent,
    ToolbarBasicComponent,
    ListBasicComponent,
    ChipBasicComponent,
    BadgeBasicComponent,
    ProgressBarBasicComponent,
    HeaderFooterBasicComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    ...(Object.keys(VizModules).map(i => VizModules[i])),
  ],
  providers: [],
  entryComponents: [
    ChipPrimaryComponent,
    ListNodividerComponent,
    MenuNestedComponent,
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
    IconBasicComponent,
    ExpansionPanelBasicComponent,
    ToolbarBasicComponent,
    ListBasicComponent,
    ChipBasicComponent,
    BadgeBasicComponent,
    ProgressBarBasicComponent,
    HeaderFooterBasicComponent,
  ]
})
export class ExampleModule { }