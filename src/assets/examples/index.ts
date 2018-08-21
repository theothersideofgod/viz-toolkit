import { NgModule } from '@angular/core';
import { MaterialModule } from '../../app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as VizModules from 'libs'
import { TableNativeComponent, TableNativeData } from './table-native/table-native.component';
import { TableBasicComponent, TableBasicData } from './table-basic/table-basic.component';
import { ProgressSpinnerBasicComponent, ProgressSpinnerBasicData } from './progress-spinner-basic/progress-spinner-basic.component';
import { SidenavBasicComponent, SidenavBasicData } from './sidenav-basic/sidenav-basic.component';
import { FeedbackIndicatorWarningComponent, FeedbackIndicatorWarningData } from './feedback-indicator-warning/feedback-indicator-warning.component';
import { FeedbackIndicatorBasicComponent, FeedbackIndicatorBasicData } from './feedback-indicator-basic/feedback-indicator-basic.component';
import { NodataBasicComponent, NodataBasicData } from './nodata-basic/nodata-basic.component';
import { CardBasicComponent, CardBasicData } from './card-basic/card-basic.component';
import { PaginatorBasicComponent, PaginatorBasicData } from './paginator-basic/paginator-basic.component';
import { TooltipBasicComponent, TooltipBasicData } from './tooltip-basic/tooltip-basic.component';
import { FooterBasicComponent, FooterBasicData } from './footer-basic/footer-basic.component';
import { HeaderBasicComponent, HeaderBasicData } from './header-basic/header-basic.component';
import { SnackbarMobileComponent, SnackbarMobileData } from './snackbar-mobile/snackbar-mobile.component';
import { SnackbarBasicComponent, SnackbarBasicData } from './snackbar-basic/snackbar-basic.component';
import { DialogBasicComponent, DialogBasicData, DialogDataExampleDialog } from './dialog-basic/dialog-basic.component';
import { TabsNarrowComponent, TabsNarrowData } from './tabs-narrow/tabs-narrow.component';
import { TabsComponent, TabsData } from './tabs/tabs.component';
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
import { LoginBasicComponent, LoginBasicData} from './login-basic/login-basic.component'
import { MatRangeDatepickerModule, MatRangeNativeDateModule } from 'mat-range-datepicker';
import { FormsModule } from '@angular/forms';

export const ALL_EXAMPLE_ITEMS = {
  'table-native' : {
    component: TableNativeComponent,
    data: TableNativeData
  },
  'table-basic' : {
    component: TableBasicComponent,
    data: TableBasicData
  },
  'progress-spinner-basic' : {
    component: ProgressSpinnerBasicComponent,
    data: ProgressSpinnerBasicData
  },
  'sidenav-basic' : {
    component: SidenavBasicComponent,
    data: SidenavBasicData
  },
  'feedback-indicator-warning' : {
    component: FeedbackIndicatorWarningComponent,
    data: FeedbackIndicatorWarningData
  },
  'feedback-indicator-basic' : {
    component: FeedbackIndicatorBasicComponent,
    data: FeedbackIndicatorBasicData
  },
  'nodata-basic' : {
    component: NodataBasicComponent,
    data: NodataBasicData
  },
  'card-basic' : {
    component: CardBasicComponent,
    data: CardBasicData
  },
  'paginator-basic' : {
    component: PaginatorBasicComponent,
    data: PaginatorBasicData
  },
  'tooltip-basic' : {
    component: TooltipBasicComponent,
    data: TooltipBasicData
  },
  'footer-basic' : {
    component: FooterBasicComponent,
    data: FooterBasicData
  },
  'header-basic' : {
    component: HeaderBasicComponent,
    data: HeaderBasicData
  },
  'snackbar-mobile' : {
    component: SnackbarMobileComponent,
    data: SnackbarMobileData
  },
  'snackbar-basic' : {
    component: SnackbarBasicComponent,
    data: SnackbarBasicData
  },
  'dialog-basic' : {
    component: DialogBasicComponent,
    data: DialogBasicData
  },
  'tabs-narrow' : {
    component: TabsNarrowComponent,
    data: TabsNarrowData
  },
  'tabs' : {
    component: TabsComponent,
    data: TabsData
  },
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
  },
  'login-basic': {
    component: LoginBasicComponent,
    data: LoginBasicData
  }
}
@NgModule({
  declarations: [
    TableNativeComponent,
    TableBasicComponent,
    ProgressSpinnerBasicComponent,
    SidenavBasicComponent,
    FeedbackIndicatorWarningComponent,
    FeedbackIndicatorBasicComponent,
    NodataBasicComponent,
    CardBasicComponent,
    PaginatorBasicComponent,
    TooltipBasicComponent,
    FooterBasicComponent,
    HeaderBasicComponent,
    SnackbarMobileComponent,
    SnackbarBasicComponent,
    DialogDataExampleDialog,
    DialogBasicComponent,
    TabsNarrowComponent,
    TabsComponent,
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
    LoginBasicComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatRangeDatepickerModule,
    MatRangeNativeDateModule,
    ...(Object.keys(VizModules).map(i => VizModules[i])),
  ],
  providers: [],
  entryComponents: [
    TableNativeComponent,
    TableBasicComponent,
    ProgressSpinnerBasicComponent,
    SidenavBasicComponent,
    FeedbackIndicatorWarningComponent,
    FeedbackIndicatorBasicComponent,
    NodataBasicComponent,
    CardBasicComponent,
    PaginatorBasicComponent,
    TooltipBasicComponent,
    FooterBasicComponent,
    HeaderBasicComponent,
    SnackbarMobileComponent,
    SnackbarBasicComponent,
    DialogDataExampleDialog,
    DialogBasicComponent,
    TabsNarrowComponent,
    TabsComponent,
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
    LoginBasicComponent,
  ]
})
export class ExampleModule { }