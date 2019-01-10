import { NgModule } from '@angular/core';
import { MaterialModule } from '../../app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import * as VizModules from 'libs';

import {
  VizHeaderModule,
  VizDateRangePickerModule,
  VizSelectModule,
  VizFooterModule,
  VizMenuModule,
  VizCheckboxModule,
  VizButtonModule,
  VizFormFieldModule,
  VizTreeModule,
  VizSliderModule,
  VizToolbarModule,
  VizIconModule,
  VizListModule,
  VizChipModule,
  VizBadgeModule,
  VizTabsModule,
  VizDialogModule,
  VizLoginModule,
  VizNodataModule,
  VizFeedbackIndicatorModule,
  VizSidenavModule,
  VizProgressSpinnerModule,
  VizTableModule,
  VizSteppersModule,
  VizBottomSheetModule,
  VizBreadcrumbModule,
  VizSearchModule,
  VizChartModule,
  CustomerSelectModule,
  CustomStepperModule
} from 'libs';

import {
  TabsCustomLabelComponent,
  TabsCustomLabelData
} from './tabs-custom-label/tabs-custom-label.component';
import {
  TabsThemeComponent,
  TabsThemeData
} from './tabs-theme/tabs-theme.component';
import {
  FormFieldAutocompleteGroupComponent,
  FormFieldAutocompleteGroupData
} from './form-field-autocomplete-group/form-field-autocomplete-group.component';
import {
  FormFieldAutocompleteIconComponent,
  FormFieldAutocompleteIconData
} from './form-field-autocomplete-icon/form-field-autocomplete-icon.component';
import {
  FormFieldCustomPhoneNumberComponent,
  FormFieldCustomPhoneNumberData,
  MyTelInput
} from './form-field-custom-phone-number/form-field-custom-phone-number.component';
import {
  FormFieldPrefixSuffixComponent,
  FormFieldPrefixSuffixData
} from './form-field-prefix-suffix/form-field-prefix-suffix.component';
import {
  FormFieldClearButtonComponent,
  FormFieldClearButtonData
} from './form-field-clear-button/form-field-clear-button.component';
import {
  LoginOktaComponent,
  LoginOktaData
} from './login-okta/login-okta.component';
import {
  DividerComponent,
  DividerData
} from './divider/divider.component';
import {
  IconographyComponent,
  IconographyData
} from './iconography/iconography.component';
import {
  StepperCustomComponent,
  StepperCustomData
} from './stepper-custom/stepper-custom.component';
import {
  StepperVerticalComponent,
  StepperVerticalData
} from './stepper-vertical/stepper-vertical.component';
import {
  FormFieldValidationComponent,
  FormFieldValidationData
} from './form-field-validation/form-field-validation.component';
import {
  DatePickerSingleErrorComponent,
  DatePickerSingleErrorData
} from './date-picker-single-error/date-picker-single-error.component';
import {
  ExpansionPanelAngularComponent,
  ExpansionPanelAngularData
} from './expansion-panel-angular/expansion-panel-angular.component';
import {
  CustomerSelectComponent,
  CustomerSelectData
} from './customer-select/customer-select.component';
import {
  FormFieldAutocompleteComponent,
  FormFieldAutocompleteData
} from './form-field-autocomplete/form-field-autocomplete.component';
import {
  MonthPickerRangeComponent,
  MonthPickerRangeData
} from './month-picker-range/month-picker-range.component';
import {
  MonthPickerSingleComponent,
  MonthPickerSingleData
} from './month-picker-single/month-picker-single.component';
import {
  SliderRangeEventComponent,
  SliderRangeEventData
} from './slider-range-event/slider-range-event.component';
import {
  SliderEventComponent,
  SliderEventData
} from './slider-event/slider-event.component';
import {
  ToolbarColorComponent,
  ToolbarColorData
} from './toolbar-color/toolbar-color.component';
import {
  DatePickerEventComponent,
  DatePickerEventData
} from './date-picker-event/date-picker-event.component';
import {
  SliderRangeIconComponent,
  SliderRangeIconData
} from './slider-range-icon/slider-range-icon.component';
import {
  SliderRangeComponent,
  SliderRangeData
} from './slider-range/slider-range.component';
import {
  SliderContinueIconComponent,
  SliderContinueIconData
} from './slider-continue-icon/slider-continue-icon.component';
import {
  SliderContinueComponent,
  SliderContinueData
} from './slider-continue/slider-continue.component';
import {
  SliderBasicIconComponent,
  SliderBasicIconData
} from './slider-basic-icon/slider-basic-icon.component';
import {
  DatePickerSingleComponent,
  DatePickerSingleData
} from './date-picker-single/date-picker-single.component';
import {
  FeedbackIndicatorSuccessComponent,
  FeedbackIndicatorSuccessData
} from './feedback-indicator-success/feedback-indicator-success.component';
import { IconBigComponent, IconBigData } from './icon-big/icon-big.component';
import {
  IconSmallComponent,
  IconSmallData
} from './icon-small/icon-small.component';
import {
  ChipDisableComponent,
  ChipDisableData
} from './chip-disable/chip-disable.component';
import {
  ChipCloseComponent,
  ChipCloseData
} from './chip-close/chip-close.component';
import {
  BadgeTabsComponent,
  BadgeTabsData
} from './badge-tabs/badge-tabs.component';
import {
  BadgeIconComponent,
  BadgeIconData
} from './badge-icon/badge-icon.component';
import {
  ButtonDisableComponent,
  ButtonDisableData
} from './button-disable/button-disable.component';
import {
  ButtonIconLeftComponent,
  ButtonIconLeftData
} from './button-icon-left/button-icon-left.component';
import {
  ButtonIconRightComponent,
  ButtonIconRightData
} from './button-icon-right/button-icon-right.component';
import {
  ButtonTextComponent,
  ButtonTextData
} from './button-text/button-text.component';
import {
  ButtonStrokedComponent,
  ButtonStrokedData
} from './button-stroked/button-stroked.component';
import {
  TreeCheckboxComponent,
  TreeCheckboxData
} from './tree-checkbox/tree-checkbox.component';
import {
  HeaderApplicationComponent,
  HeaderApplicationData
} from './header-application/header-application.component';
import {
  SlideToggleDisableComponent,
  SlideToggleDisableData
} from './slide-toggle-disable/slide-toggle-disable.component';
import {
  SelectDisableComponent,
  SelectDisableData
} from './select-disable/select-disable.component';
import {
  RadioButtonDisableComponent,
  RadioButtonDisableData
} from './radio-button-disable/radio-button-disable.component';
import {
  FormFieldDisableComponent,
  FormFieldDisableData
} from './form-field-disable/form-field-disable.component';
import {
  FormFieldErrorComponent,
  FormFieldErrorData
} from './form-field-error/form-field-error.component';
import {
  FormFieldTextareaComponent,
  FormFieldTextareaData
} from './form-field-textarea/form-field-textarea.component';
import {
  FormFieldHintComponent,
  FormFieldHintData
} from './form-field-hint/form-field-hint.component';
import {
  CheckboxDisableComponent,
  CheckboxDisableData
} from './checkbox-disable/checkbox-disable.component';
import {
  CheckboxIndetermineComponent,
  CheckboxIndetermineData
} from './checkbox-indetermine/checkbox-indetermine.component';
import {
  BenchmarkChartBasicComponent,
  BenchmarkChartBasicData
} from './benchmark-chart-basic/benchmark-chart-basic.component';
import {
  ComparativeChartBasicComponent,
  ComparativeChartBasicData
} from './comparative-chart-basic/comparative-chart-basic.component';
import {
  DotPlotChartBasicComponent,
  DotPlotChartBasicData
} from './dot-plot-chart-basic/dot-plot-chart-basic.component';
import {
  ProgressBarChartBasicComponent,
  ProgressBarChartBasicData
} from './progress-bar-chart-basic/progress-bar-chart-basic.component';
import {
  BarChartBasicComponent,
  BarChartBasicData
} from './bar-chart-basic/bar-chart-basic.component';
import {
  LineChartBasicComponent,
  LineChartBasicData
} from './line-chart-basic/line-chart-basic.component';
import {
  SearchBasicComponent,
  SearchBasicData
} from './search-basic/search-basic.component';
import {
  BreadscrumbBasicComponent,
  BreadscrumbBasicData
} from './breadscrumb-basic/breadscrumb-basic.component';
import {
  BottomsheetBasicComponent,
  BottomsheetBasicData
} from './bottomsheet-basic/bottomsheet-basic.component';
import {
  StepperBasicComponent,
  StepperBasicData
} from './stepper-basic/stepper-basic.component';
import {
  ExpansionPanelTableComponent,
  ExpansionPanelTableData
} from './expansion-panel-table/expansion-panel-table.component';
import {
  TableNativeComponent,
  TableNativeData
} from './table-native/table-native.component';
import {
  TableBasicComponent,
  TableBasicData
} from './table-basic/table-basic.component';
import {
  ProgressSpinnerBasicComponent,
  ProgressSpinnerBasicData
} from './progress-spinner-basic/progress-spinner-basic.component';
import {
  SidenavBasicComponent,
  SidenavBasicData
} from './sidenav-basic/sidenav-basic.component';
import {
  FeedbackIndicatorWarningComponent,
  FeedbackIndicatorWarningData
} from './feedback-indicator-warning/feedback-indicator-warning.component';
import {
  FeedbackIndicatorBasicComponent,
  FeedbackIndicatorBasicData
} from './feedback-indicator-basic/feedback-indicator-basic.component';
import {
  NodataBasicComponent,
  NodataBasicData
} from './nodata-basic/nodata-basic.component';
import {
  CardBasicComponent,
  CardBasicData
} from './card-basic/card-basic.component';
import {
  PaginatorBasicComponent,
  PaginatorBasicData
} from './paginator-basic/paginator-basic.component';
import {
  TooltipBasicComponent,
  TooltipBasicData
} from './tooltip-basic/tooltip-basic.component';
import {
  FooterBasicComponent,
  FooterBasicData
} from './footer-basic/footer-basic.component';
import {
  HeaderBasicComponent,
  HeaderBasicData
} from './header-basic/header-basic.component';
import {
  SnackbarMobileComponent,
  SnackbarMobileData
} from './snackbar-mobile/snackbar-mobile.component';
import {
  SnackbarBasicComponent,
  SnackbarBasicData
} from './snackbar-basic/snackbar-basic.component';
import {
  DialogBasicComponent,
  DialogBasicData,
  DialogDataExampleDialog
} from './dialog-basic/dialog-basic.component';
import {
  TabsNarrowComponent,
  TabsNarrowData
} from './tabs-narrow/tabs-narrow.component';
import { TabsComponent, TabsData } from './tabs/tabs.component';
import {
  ChipPrimaryComponent,
  ChipPrimaryData
} from './chip-primary/chip-primary.component';
import {
  ListNodividerComponent,
  ListNodividerData
} from './list-nodivider/list-nodivider.component';
import {
  MenuNestedComponent,
  MenuNestedData
} from './menu-nested/menu-nested.component';
import {
  ButtonBasicComponent,
  ButtonBasicData
} from './button-basic/button-basic.component';
import {
  DatePickerBasicComponent,
  DatePickerBasicData
} from './date-picker-basic/date-picker-basic.component';
import {
  SelectBasicComponent,
  SelectBasicData
} from './select-basic/select-basic.component';
import {
  CheckboxBasicComponent,
  CheckboxBasicData
} from './checkbox-basic/checkbox-basic.component';
import {
  MenuBasicComponent,
  MenuBasicData
} from './menu-basic/menu-basic.component';
import {
  FormFieldBasicComponent,
  FormFieldBasicData
} from './form-field-basic/form-field-basic.component';
import {
  RadioButtonBasicComponent,
  RadioButtonBasicData
} from './radio-button-basic/radio-button-basic.component';
import {
  TreeBasicComponent,
  TreeBasicData
} from './tree-basic/tree-basic.component';
import {
  SliderBasicComponent,
  SliderBasicData
} from './slider-basic/slider-basic.component';
import {
  SlideToggleBasicComponent,
  SlideToggleBasicData
} from './slide-toggle-basic/slide-toggle-basic.component';
import {
  IconBasicComponent,
  IconBasicData
} from './icon-basic/icon-basic.component';
import {
  ExpansionPanelBasicComponent,
  ExpansionPanelBasicData
} from './expansion-panel-basic/expansion-panel-basic.component';
import {
  ToolbarBasicComponent,
  ToolbarBasicData
} from './toolbar-basic/toolbar-basic.component';
import {
  ListBasicComponent,
  ListBasicData
} from './list-basic/list-basic.component';
import {
  ChipBasicComponent,
  ChipBasicData
} from './chip-basic/chip-basic.component';
import {
  BadgeBasicComponent,
  BadgeBasicData
} from './badge-basic/badge-basic.component';
import {
  ProgressBarBasicComponent,
  ProgressBarBasicData
} from './progress-bar-basic/progress-bar-basic.component';
import {
  HeaderFooterBasicComponent,
  HeaderFooterBasicData
} from './header-footer-basic/header-footer-basic.component';
import {
  LoginBasicComponent,
  LoginBasicData
} from './login-basic/login-basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';
export const ALL_EXAMPLE_ITEMS = {
  'tabs-custom-label' : {
    component: TabsCustomLabelComponent,
    data: TabsCustomLabelData
  },
  'tabs-theme' : {
    component: TabsThemeComponent,
    data: TabsThemeData
  },
  'form-field-autocomplete-group' : {
    component: FormFieldAutocompleteGroupComponent,
    data: FormFieldAutocompleteGroupData
  },
  'form-field-autocomplete-icon' : {
    component: FormFieldAutocompleteIconComponent,
    data: FormFieldAutocompleteIconData
  },
  'form-field-custom-phone-number' : {
    component: FormFieldCustomPhoneNumberComponent,
    data: FormFieldCustomPhoneNumberData
  },
  'form-field-prefix-suffix' : {
    component: FormFieldPrefixSuffixComponent,
    data: FormFieldPrefixSuffixData
  },
  'form-field-clear-button' : {
    component: FormFieldClearButtonComponent,
    data: FormFieldClearButtonData
  },
  'login-okta' : {
    component: LoginOktaComponent,
    data: LoginOktaData
  },
  'divider' : {
    component: DividerComponent,
    data: DividerData
  },
  'iconography' : {
    component: IconographyComponent,
    data: IconographyData
  },
  'stepper-custom' : {
    component: StepperCustomComponent,
    data: StepperCustomData
  },
  'stepper-vertical': {
    component: StepperVerticalComponent,
    data: StepperVerticalData
  },
  'form-field-validation': {
    component: FormFieldValidationComponent,
    data: FormFieldValidationData
  },
  'date-picker-single-error': {
    component: DatePickerSingleErrorComponent,
    data: DatePickerSingleErrorData
  },
  'expansion-panel-angular': {
    component: ExpansionPanelAngularComponent,
    data: ExpansionPanelAngularData
  },
  'customer-select': {
    component: CustomerSelectComponent,
    data: CustomerSelectData
  },
  'form-field-autocomplete': {
    component: FormFieldAutocompleteComponent,
    data: FormFieldAutocompleteData
  },
  'month-picker-range': {
    component: MonthPickerRangeComponent,
    data: MonthPickerRangeData
  },
  'month-picker-single': {
    component: MonthPickerSingleComponent,
    data: MonthPickerSingleData
  },
  'slider-range-event': {
    component: SliderRangeEventComponent,
    data: SliderRangeEventData
  },
  'slider-event': {
    component: SliderEventComponent,
    data: SliderEventData
  },
  'toolbar-color': {
    component: ToolbarColorComponent,
    data: ToolbarColorData
  },
  'date-picker-event': {
    component: DatePickerEventComponent,
    data: DatePickerEventData
  },
  'slider-range-icon': {
    component: SliderRangeIconComponent,
    data: SliderRangeIconData
  },
  'slider-range': {
    component: SliderRangeComponent,
    data: SliderRangeData
  },
  'slider-continue-icon': {
    component: SliderContinueIconComponent,
    data: SliderContinueIconData
  },
  'slider-continue': {
    component: SliderContinueComponent,
    data: SliderContinueData
  },
  'slider-basic-icon': {
    component: SliderBasicIconComponent,
    data: SliderBasicIconData
  },
  'date-picker-single': {
    component: DatePickerSingleComponent,
    data: DatePickerSingleData
  },
  'feedback-indicator-success': {
    component: FeedbackIndicatorSuccessComponent,
    data: FeedbackIndicatorSuccessData
  },
  'icon-big': {
    component: IconBigComponent,
    data: IconBigData
  },
  'icon-small': {
    component: IconSmallComponent,
    data: IconSmallData
  },
  'chip-disable': {
    component: ChipDisableComponent,
    data: ChipDisableData
  },
  'chip-close': {
    component: ChipCloseComponent,
    data: ChipCloseData
  },
  'badge-tabs': {
    component: BadgeTabsComponent,
    data: BadgeTabsData
  },
  'badge-icon': {
    component: BadgeIconComponent,
    data: BadgeIconData
  },
  'button-disable': {
    component: ButtonDisableComponent,
    data: ButtonDisableData
  },
  'button-icon-left': {
    component: ButtonIconLeftComponent,
    data: ButtonIconLeftData
  },
  'button-icon-right': {
    component: ButtonIconRightComponent,
    data: ButtonIconRightData
  },
  'button-text': {
    component: ButtonTextComponent,
    data: ButtonTextData
  },
  'button-stroked': {
    component: ButtonStrokedComponent,
    data: ButtonStrokedData
  },
  'tree-checkbox': {
    component: TreeCheckboxComponent,
    data: TreeCheckboxData
  },
  'header-application': {
    component: HeaderApplicationComponent,
    data: HeaderApplicationData
  },
  'slide-toggle-disable': {
    component: SlideToggleDisableComponent,
    data: SlideToggleDisableData
  },
  'select-disable': {
    component: SelectDisableComponent,
    data: SelectDisableData
  },
  'radio-button-disable': {
    component: RadioButtonDisableComponent,
    data: RadioButtonDisableData
  },
  'form-field-disable': {
    component: FormFieldDisableComponent,
    data: FormFieldDisableData
  },
  'form-field-error': {
    component: FormFieldErrorComponent,
    data: FormFieldErrorData
  },
  'form-field-textarea': {
    component: FormFieldTextareaComponent,
    data: FormFieldTextareaData
  },
  'form-field-hint': {
    component: FormFieldHintComponent,
    data: FormFieldHintData
  },
  'checkbox-disable': {
    component: CheckboxDisableComponent,
    data: CheckboxDisableData
  },
  'checkbox-indetermine': {
    component: CheckboxIndetermineComponent,
    data: CheckboxIndetermineData
  },
  'benchmark-chart-basic': {
    component: BenchmarkChartBasicComponent,
    data: BenchmarkChartBasicData
  },
  'comparative-chart-basic': {
    component: ComparativeChartBasicComponent,
    data: ComparativeChartBasicData
  },
  'dot-plot-chart-basic': {
    component: DotPlotChartBasicComponent,
    data: DotPlotChartBasicData
  },
  'progress-bar-chart-basic': {
    component: ProgressBarChartBasicComponent,
    data: ProgressBarChartBasicData
  },
  'bar-chart-basic': {
    component: BarChartBasicComponent,
    data: BarChartBasicData
  },
  'line-chart-basic': {
    component: LineChartBasicComponent,
    data: LineChartBasicData
  },
  'search-basic': {
    component: SearchBasicComponent,
    data: SearchBasicData
  },
  'breadscrumb-basic': {
    component: BreadscrumbBasicComponent,
    data: BreadscrumbBasicData
  },
  'bottomsheet-basic': {
    component: BottomsheetBasicComponent,
    data: BottomsheetBasicData
  },
  'stepper-basic': {
    component: StepperBasicComponent,
    data: StepperBasicData
  },
  'expansion-panel-table': {
    component: ExpansionPanelTableComponent,
    data: ExpansionPanelTableData
  },
  'table-native': {
    component: TableNativeComponent,
    data: TableNativeData
  },
  'table-basic': {
    component: TableBasicComponent,
    data: TableBasicData
  },
  'progress-spinner-basic': {
    component: ProgressSpinnerBasicComponent,
    data: ProgressSpinnerBasicData
  },
  'sidenav-basic': {
    component: SidenavBasicComponent,
    data: SidenavBasicData
  },
  'feedback-indicator-warning': {
    component: FeedbackIndicatorWarningComponent,
    data: FeedbackIndicatorWarningData
  },
  'feedback-indicator-basic': {
    component: FeedbackIndicatorBasicComponent,
    data: FeedbackIndicatorBasicData
  },
  'nodata-basic': {
    component: NodataBasicComponent,
    data: NodataBasicData
  },
  'card-basic': {
    component: CardBasicComponent,
    data: CardBasicData
  },
  'paginator-basic': {
    component: PaginatorBasicComponent,
    data: PaginatorBasicData
  },
  'tooltip-basic': {
    component: TooltipBasicComponent,
    data: TooltipBasicData
  },
  'footer-basic': {
    component: FooterBasicComponent,
    data: FooterBasicData
  },
  'header-basic': {
    component: HeaderBasicComponent,
    data: HeaderBasicData
  },
  'snackbar-mobile': {
    component: SnackbarMobileComponent,
    data: SnackbarMobileData
  },
  'snackbar-basic': {
    component: SnackbarBasicComponent,
    data: SnackbarBasicData
  },
  'dialog-basic': {
    component: DialogBasicComponent,
    data: DialogBasicData
  },
  'tabs-narrow': {
    component: TabsNarrowComponent,
    data: TabsNarrowData
  },
  tabs: {
    component: TabsComponent,
    data: TabsData
  },
  'chip-primary': {
    component: ChipPrimaryComponent,
    data: ChipPrimaryData
  },
  'list-nodivider': {
    component: ListNodividerComponent,
    data: ListNodividerData
  },
  'menu-nested': {
    component: MenuNestedComponent,
    data: MenuNestedData
  },
  'button-basic': {
    component: ButtonBasicComponent,
    data: ButtonBasicData
  },
  'date-picker-basic': {
    component: DatePickerBasicComponent,
    data: DatePickerBasicData
  },
  'select-basic': {
    component: SelectBasicComponent,
    data: SelectBasicData
  },
  'checkbox-basic': {
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
};
// console.log(Object.keys(VizModules).join(','));
@NgModule({
  declarations: [
    TabsCustomLabelComponent,
    TabsThemeComponent,
    FormFieldAutocompleteGroupComponent,
    FormFieldAutocompleteIconComponent,
    FormFieldCustomPhoneNumberComponent,
    FormFieldPrefixSuffixComponent,
    FormFieldClearButtonComponent,
    LoginOktaComponent,
    DividerComponent,
    IconographyComponent,
    StepperCustomComponent,
    StepperVerticalComponent,
    FormFieldValidationComponent,
    DatePickerSingleErrorComponent,
    ExpansionPanelAngularComponent,
    CustomerSelectComponent,
    FormFieldAutocompleteComponent,
    MonthPickerRangeComponent,
    MonthPickerSingleComponent,
    SliderRangeEventComponent,
    SliderEventComponent,
    ToolbarColorComponent,
    DatePickerEventComponent,
    SliderRangeIconComponent,
    SliderRangeComponent,
    SliderContinueIconComponent,
    SliderContinueComponent,
    SliderBasicIconComponent,
    DatePickerSingleComponent,
    FeedbackIndicatorSuccessComponent,
    IconBigComponent,
    IconSmallComponent,
    ChipDisableComponent,
    ChipCloseComponent,
    BadgeTabsComponent,
    BadgeIconComponent,
    ButtonDisableComponent,
    ButtonIconLeftComponent,
    ButtonIconRightComponent,
    ButtonTextComponent,
    ButtonStrokedComponent,
    TreeCheckboxComponent,
    HeaderApplicationComponent,
    SlideToggleDisableComponent,
    SelectDisableComponent,
    RadioButtonDisableComponent,
    FormFieldDisableComponent,
    FormFieldErrorComponent,
    FormFieldTextareaComponent,
    FormFieldHintComponent,
    CheckboxDisableComponent,
    CheckboxIndetermineComponent,
    BenchmarkChartBasicComponent,
    ComparativeChartBasicComponent,
    DotPlotChartBasicComponent,
    ProgressBarChartBasicComponent,
    ProgressBarBasicComponent,
    BarChartBasicComponent,
    LineChartBasicComponent,
    SearchBasicComponent,
    BreadscrumbBasicComponent,
    BottomsheetBasicComponent,
    StepperBasicComponent,
    ExpansionPanelTableComponent,
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
    MyTelInput
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    VizHeaderModule,
    VizDateRangePickerModule,
    VizSelectModule,
    VizFooterModule,
    VizMenuModule,
    VizCheckboxModule,
    VizButtonModule,
    VizFormFieldModule,
    VizTreeModule,
    VizSliderModule,
    VizToolbarModule,
    VizIconModule,
    VizListModule,
    VizChipModule,
    VizBadgeModule,
    VizTabsModule,
    VizDialogModule,
    VizLoginModule,
    VizNodataModule,
    VizFeedbackIndicatorModule,
    VizSidenavModule,
    VizProgressSpinnerModule,
    VizTableModule,
    VizSteppersModule,
    VizBottomSheetModule,
    VizBreadcrumbModule,
    VizSearchModule,
    VizChartModule,
    CustomerSelectModule,
    CustomStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  entryComponents: [
    TabsCustomLabelComponent,
    TabsThemeComponent,
    FormFieldAutocompleteGroupComponent,
    FormFieldAutocompleteIconComponent,
    FormFieldCustomPhoneNumberComponent,
    FormFieldPrefixSuffixComponent,
    FormFieldClearButtonComponent,
    LoginOktaComponent,
    DividerComponent,
    IconographyComponent,
    StepperCustomComponent,
    StepperVerticalComponent,
    FormFieldValidationComponent,
    DatePickerSingleErrorComponent,
    ExpansionPanelAngularComponent,
    CustomerSelectComponent,
    FormFieldAutocompleteComponent,
    MonthPickerRangeComponent,
    MonthPickerSingleComponent,
    SliderRangeEventComponent,
    SliderEventComponent,
    ToolbarColorComponent,
    DatePickerEventComponent,
    SliderRangeIconComponent,
    SliderRangeComponent,
    SliderContinueIconComponent,
    SliderContinueComponent,
    SliderBasicIconComponent,
    DatePickerSingleComponent,
    FeedbackIndicatorSuccessComponent,
    IconBigComponent,
    IconSmallComponent,
    ChipDisableComponent,
    ChipCloseComponent,
    BadgeTabsComponent,
    BadgeIconComponent,
    ButtonDisableComponent,
    ButtonIconLeftComponent,
    ButtonIconRightComponent,
    ButtonTextComponent,
    ButtonStrokedComponent,
    TreeCheckboxComponent,
    HeaderApplicationComponent,
    SlideToggleDisableComponent,
    SelectDisableComponent,
    RadioButtonDisableComponent,
    FormFieldDisableComponent,
    FormFieldErrorComponent,
    FormFieldTextareaComponent,
    FormFieldHintComponent,
    CheckboxDisableComponent,
    CheckboxIndetermineComponent,
    BenchmarkChartBasicComponent,
    ComparativeChartBasicComponent,
    DotPlotChartBasicComponent,
    ProgressBarChartBasicComponent,
    ProgressBarBasicComponent,
    BarChartBasicComponent,
    LineChartBasicComponent,
    SearchBasicComponent,
    BreadscrumbBasicComponent,
    BottomsheetBasicComponent,
    StepperBasicComponent,
    ExpansionPanelTableComponent,
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
    MyTelInput
  ]
})
export class ExampleModule {}
